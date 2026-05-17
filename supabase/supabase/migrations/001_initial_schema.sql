-- Settled App - Initial Database Schema
-- PostgreSQL with Supabase (includes RLS policies)

-- ============================================================
-- EXTENSIONS
-- ============================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLES
-- ============================================================

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT NOT NULL DEFAULT \'\',
  avatar_url TEXT,
  uk_postcode TEXT,
  subscription_tier TEXT NOT NULL DEFAULT \'free\' CHECK (subscription_tier IN (\'free\', \'premium\', \'group\')),
  onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- User preferences
CREATE TABLE public.user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  dietary_restrictions TEXT[] DEFAULT \'{}\',
  favourite_genres TEXT[] DEFAULT \'{}\',
  location TEXT,
  uk_postcode TEXT,
  categories TEXT[] DEFAULT \'{}\',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Rooms
CREATE TABLE public.rooms (
  id TEXT PRIMARY KEY, -- Room code (e.g., "ABC123")
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (\'films\', \'tv_shows\', \'takeaways\', \'restaurants\', \'board_games\', \'video_games\', \'activities\')),
  host_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT \'waiting\' CHECK (status IN (\'waiting\', \'active\', \'completed\', \'expired\')),
  max_participants INTEGER NOT NULL DEFAULT 4,
  swipe_timeout INTEGER NOT NULL DEFAULT 30, -- seconds per card
  avoid_repeats BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL \'24 hours\')
);

-- Room participants
CREATE TABLE public.room_participants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id TEXT NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE(room_id, user_id)
);

-- Cards (with category-specific JSONB metadata)
CREATE TABLE public.cards (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN (\'films\', \'tv_shows\', \'takeaways\', \'restaurants\', \'board_games\', \'video_games\', \'activities\')),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  metadata JSONB NOT NULL DEFAULT \'{}\',
  rating DECIMAL(3,1) DEFAULT 0,
  deep_links JSONB DEFAULT \'{}\',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Swipe actions
CREATE TABLE public.swipe_actions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL REFERENCES public.cards(id) ON DELETE CASCADE,
  room_id TEXT NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  action TEXT NOT NULL CHECK (action IN (\'like\', \'dislike\', \'superlike\')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, card_id, room_id)
);

-- Matches (when all participants like the same card)
CREATE TABLE public.matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id TEXT NOT NULL REFERENCES public.rooms(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL REFERENCES public.cards(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  matched_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Match history (tracks which users were part of a match)
CREATE TABLE public.match_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  match_id UUID NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(match_id, user_id)
);

-- Favourites (users can save items they liked)
CREATE TABLE public.favourites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL REFERENCES public.cards(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, card_id)
);

-- Subscriptions
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  tier TEXT NOT NULL DEFAULT \'free\' CHECK (tier IN (\'free\', \'premium\', \'group\')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT \'active\' CHECK (status IN (\'active\', \'cancelled\', \'past_due\', \'trialing\')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX idx_rooms_host_id ON public.rooms(host_id);
CREATE INDEX idx_rooms_status ON public.rooms(status);
CREATE INDEX idx_rooms_category ON public.rooms(category);
CREATE INDEX idx_room_participants_room_id ON public.room_participants(room_id);
CREATE INDEX idx_room_participants_user_id ON public.room_participants(user_id);
CREATE INDEX idx_cards_category ON public.cards(category);
CREATE INDEX idx_swipe_actions_user_id ON public.swipe_actions(user_id);
CREATE INDEX idx_swipe_actions_room_id ON public.swipe_actions(room_id);
CREATE INDEX idx_swipe_actions_card_id ON public.swipe_actions(card_id);
CREATE INDEX idx_matches_room_id ON public.matches(room_id);
CREATE INDEX idx_favourites_user_id ON public.favourites(user_id);
CREATE INDEX idx_subscriptions_user_id ON public.subscriptions(user_id);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.swipe_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.match_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favourites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Users: can read own profile, update own profile
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- User preferences: own data only
CREATE POLICY "Users can manage own preferences" ON public.user_preferences
  FOR ALL USING (auth.uid() = user_id);

-- Rooms: participants can view, host can manage
CREATE POLICY "Anyone can view active rooms" ON public.rooms
  FOR SELECT USING (status IN (\'waiting\', \'active\'));

CREATE POLICY "Authenticated users can create rooms" ON public.rooms
  FOR INSERT WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Host can update room" ON public.rooms
  FOR UPDATE USING (auth.uid() = host_id);

-- Room participants: can view rooms they are in
CREATE POLICY "Participants can view room members" ON public.room_participants
  FOR SELECT USING (
    user_id = auth.uid() OR
    room_id IN (SELECT room_id FROM public.room_participants WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can join rooms" ON public.room_participants
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can leave rooms" ON public.room_participants
  FOR DELETE USING (auth.uid() = user_id);

-- Cards: readable by all authenticated users
CREATE POLICY "Authenticated users can view cards" ON public.cards
  FOR SELECT USING (auth.role() = \'authenticated\');

-- Swipe actions: own data only
CREATE POLICY "Users can manage own swipes" ON public.swipe_actions
  FOR ALL USING (auth.uid() = user_id);

-- Matches: viewable by room participants
CREATE POLICY "Room participants can view matches" ON public.matches
  FOR SELECT USING (
    room_id IN (SELECT room_id FROM public.room_participants WHERE user_id = auth.uid())
  );

-- Match history: viewable by involved users
CREATE POLICY "Users can view own match history" ON public.match_history
  FOR SELECT USING (auth.uid() = user_id);

-- Favourites: own data only
CREATE POLICY "Users can manage own favourites" ON public.favourites
  FOR ALL USING (auth.uid() = user_id);

-- Subscriptions: own data only
CREATE POLICY "Users can view own subscription" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================================
-- FUNCTIONS & TRIGGERS
-- ============================================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_users_updated
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER on_user_preferences_updated
  BEFORE UPDATE ON public.user_preferences
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER on_cards_updated
  BEFORE UPDATE ON public.cards
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER on_subscriptions_updated
  BEFORE UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Auto-create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>\'display_name\', \'\'));

  INSERT INTO public.user_preferences (user_id)
  VALUES (NEW.id);

  INSERT INTO public.subscriptions (user_id, tier)
  VALUES (NEW.id, \'free\');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
