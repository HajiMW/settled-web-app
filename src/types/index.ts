/**
 * Settled App - TypeScript Type Definitions
 * A group decision-making app (like Tinder for swiping on choices)
 */

// ─── Enums ───────────────────────────────────────────────────────────────────

export enum Category {
  FILMS = 'films',
  TV_SHOWS = 'tv_shows',
  TAKEAWAYS = 'takeaways',
  RESTAURANTS = 'restaurants',
  BOARD_GAMES = 'board_games',
  VIDEO_GAMES = 'video_games',
  ACTIVITIES = 'activities',
}

export type SubscriptionTier = 'free' | 'premium' | 'group';

export type SwipeActionType = 'like' | 'dislike' | 'superlike';

export type RoomStatus = 'waiting' | 'active' | 'completed' | 'expired';

export type OnboardingStep =
  | 'welcome'
  | 'profile'
  | 'preferences'
  | 'categories'
  | 'tutorial'
  | 'complete';

// ─── User Types ──────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatar: string | null;
  preferences: UserPreferences;
  subscriptionTier: SubscriptionTier;
  ukPostcode: string | null;
  createdAt: string;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  favouriteGenres: string[];
  location: string | null;
  ukPostcode: string | null;
  categories: Category[];
}

// ─── Room Types ──────────────────────────────────────────────────────────────

export interface Room {
  id: string;
  name: string;
  category: Category;
  hostId: string;
  participants: string[];
  status: RoomStatus;
  settings: RoomSettings;
  createdAt: string;
}

export interface RoomSettings {
  maxParticipants: number;
  swipeTimeout: number; // seconds per card
  avoidRepeats: boolean;
  category: Category;
}

// ─── Card Types ──────────────────────────────────────────────────────────────

export interface Card {
  id: string;
  category: Category;
  title: string;
  description: string;
  imageUrl: string;
  metadata: CardMetadata;
  rating: number;
  deepLinks: DeepLinks;
}

export type CardMetadata =
  | FilmMetadata
  | TVShowMetadata
  | TakeawayMetadata
  | RestaurantMetadata
  | BoardGameMetadata
  | VideoGameMetadata
  | ActivityMetadata;

export interface FilmMetadata {
  type: 'film';
  year: number;
  director: string;
  genre: string[];
  runtime: number; // minutes
  streamingPlatforms: string[];
}

export interface TVShowMetadata {
  type: 'tv_show';
  year: number;
  seasons: number;
  genre: string[];
  streamingPlatforms: string[];
}

export interface TakeawayMetadata {
  type: 'takeaway';
  cuisine: string;
  priceRange: string; // £, ££, £££
  deliveryTime: string; // e.g. "30-45 min"
  dietaryOptions: string[];
}

export interface RestaurantMetadata {
  type: 'restaurant';
  cuisine: string;
  priceRange: string;
  location: string;
  dietaryOptions: string[];
}

export interface BoardGameMetadata {
  type: 'board_game';
  playerCount: string; // e.g. "2-4"
  duration: string; // e.g. "60-120 min"
  complexity: 'light' | 'medium' | 'heavy';
  category: string;
}

export interface VideoGameMetadata {
  type: 'video_game';
  platforms: string[];
  genre: string;
  playerCount: string;
  ageRating: string;
}

export interface ActivityMetadata {
  type: 'activity';
  locationType: string;
  priceRange: string;
  groupSize: string;
  duration: string;
}

export interface DeepLinks {
  primary?: string;
  uberEats?: string;
  justEat?: string;
  deliveroo?: string;
  streaming?: Record<string, string>;
  booking?: string;
}

// ─── Swipe & Match Types ─────────────────────────────────────────────────────

export interface SwipeAction {
  userId: string;
  cardId: string;
  roomId: string;
  action: SwipeActionType;
  timestamp: string;
}

export interface Match {
  id: string;
  roomId: string;
  cardId: string;
  participants: string[];
  matchedAt: string;
  category: Category;
}

// ─── Subscription Types ──────────────────────────────────────────────────────

export interface Subscription {
  tier: SubscriptionTier;
  features: string[];
  price: number; // GBP per month
}

export const SUBSCRIPTION_TIERS: Subscription[] = [
  {
    tier: 'free',
    features: [
      'Create up to 3 rooms per day',
      'Up to 4 participants per room',
      'Basic categories',
      'Standard recommendations',
    ],
    price: 0,
  },
  {
    tier: 'premium',
    features: [
      'Unlimited rooms',
      'Up to 8 participants per room',
      'All categories',
      'Advanced recommendations',
      'Match history',
      'Favourites list',
    ],
    price: 4.99,
  },
  {
    tier: 'group',
    features: [
      'Everything in Premium',
      'Up to 20 participants per room',
      'Custom categories',
      'Priority support',
      'Analytics dashboard',
      'Team management',
    ],
    price: 9.99,
  },
];
