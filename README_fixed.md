# Settled

> A group decision-making app — like Tinder for swiping on choices.

Settled helps groups of friends, couples, or flatmates decide what to watch, where to eat, or what to do together. Everyone swipes on options independently, and the app finds what everyone agrees on.

## Features

- **🎬 Films & TV Shows** — Swipe on what to watch tonight
- **🍕 Takeaways** — Decide where to order from (with Uber Eats, Just Eat, Deliveroo links)
- **🍽️ Restaurants** — Pick a place to eat out
- **🎲 Board Games** — Choose your next game night pick
- **🎮 Video Games** — Find something to play together
- **🎳 Activities** — Decide what to do (bowling, escape rooms, cinema, etc.)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom theme with dark mode)
- **Authentication & Database**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- A Supabase account (free tier works)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/settled.git
   cd settled
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

1. Create a new Supabase project
2. Run the migration in `supabase/migrations/001_initial_schema.sql` via the SQL Editor
3. Enable Row Level Security (included in migration)
4. Enable Realtime for `rooms`, `room_participants`, `swipe_actions`, and `matches` tables

## Project Structure

```
settled/
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utilities and configurations
│   │   ├── supabase/         # Supabase client setup
│   │   ├── api/              # API service integrations
│   │   └── utils/            # General utilities
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   ├── data/                 # Mock data for all categories
│   └── styles/               # Global styles
├── public/                   # Static assets
├── supabase/                 # Database migrations
└── docs/                     # Documentation
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md) — Deploy to Vercel + Supabase
- [API Integration](docs/API_INTEGRATION.md) — External API setup and notes
- [Mobile Roadmap](docs/MOBILE_ROADMAP.md) — React Native/Expo plans

## Design System

### Colour Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Deep Navy | `#1a1b4b` | Primary backgrounds, text |
| Coral | `#ff6b6b` | Primary actions, CTAs |
| Purple | `#7c3aed` | Secondary actions, accents |
| Pink | `#ec4899` | Highlights, super likes |
| Soft Cream | `#fef9ef` | Light backgrounds |

### Dark Mode

Dark mode is supported via the `class` strategy in Tailwind CSS. Users can toggle between light and dark modes, with their preference saved to localStorage.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript strict mode
- Follow the existing file structure
- Use UK English spelling throughout
- Write descriptive commit messages
- Add JSDoc comments to exported functions

## GDPR Compliance

Settled is designed with GDPR compliance in mind:

- User data is stored in Supabase (EU region available)
- Row Level Security ensures users can only access their own data
- Users can export their data
- Users can delete their account and all associated data
- Cookie consent is required before non-essential cookies
- Privacy policy clearly explains data usage

## Licence

This project is private and proprietary.
