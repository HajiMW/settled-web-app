# API Integration Guide

## Overview

Settled uses multiple external APIs to provide rich content for each category. All API integrations are designed with a mock-first approach—the app works fully with mock data and can progressively switch to real APIs as keys are obtained.

## Switching from Mock to Real Data

Set `NEXT_PUBLIC_USE_MOCK_DATA=false` in your environment variables and provide the relevant API keys.

---

## TMDB (The Movie Database)

**Used for**: Films and TV Shows categories

**API Documentation**: https://www.themoviedb.org/talk/63e8f7eb9512e10084625490

**Authentication**: API key (free tier available)

**Rate Limits**: 40 requests per 10 seconds

**UK-Specific Considerations**:
- Use `region=GB` parameter for UK-specific release dates and certifications
- Use `language=en-GB` for British English content
- Use `watch/providers` endpoint with `watch_region=GB` for UK streaming availability

**Key Endpoints**:
- `GET /search/movie` - Search films
- `GET /movie/{id}` - Film details
- `GET /search/tv` - Search TV shows
- `GET /tv/{id}` - TV show details
- `GET /movie/{id}/watch/providers` - Streaming availability

**Setup**:
1. Register at https://www.themoviedb.org/signup
2. Request an API key in account settings
3. Set `IMDB_API_KEY` environment variable

---

## Google Places API

**Used for**: Restaurants category (location-based)

**API Documentation**: https://developers.google.com/maps/documentation/places/web-service

**Authentication**: API key (pay-as-you-go)

**Rate Limits**: 100 requests per second per project

**UK-Specific Considerations**:
- Use `region=gb` for geocoding bias
- UK postcodes for location searches
- Filter by `type=restaurant` for dining options
- Consider `language=en-GB` for results

**Key Endpoints**:
- `GET /geocode/json` - Convert postcode to coordinates
- `GET /place/nearbysearch/json` - Find nearby restaurants
- `GET /place/details/json` - Restaurant details with reviews

**Pricing**: ~£0.025 per request (Nearby Search), ~£0.014 per request (Place Details)

**Setup**:
1. Create a project in Google Cloud Console
2. Enable Places API and Geocoding API
3. Create an API key with appropriate restrictions
4. Set `GOOGLE_PLACES_API_KEY` environment variable

---

## JustWatch

**Used for**: Streaming availability for Films and TV Shows

**API Documentation**: Partnership required (no public API)

**Alternative**: Use TMDB's `/watch/providers` endpoint (free)

**UK-Specific Considerations**:
- UK streaming platforms: Netflix, Amazon Prime Video, Disney+, NOW TV, BBC iPlayer, ITVX, Channel 4, Apple TV+, Sky Go
- Use locale `en_GB` for UK availability

**Note**: JustWatch does not offer a public API. For production, use TMDB's watch providers endpoint which sources data from JustWatch.

---

## BoardGameGeek XML API

**Used for**: Board Games category

**API Documentation**: https://boardgamegeek.com/wiki/page/BGG_XML_API2

**Authentication**: None required (public API)

**Rate Limits**: No official limit, but be respectful (max 1 request/second recommended)

**Key Endpoints**:
- `GET /xmlapi2/search?query={query}&type=boardgame` - Search games
- `GET /xmlapi2/thing?id={id}&stats=1` - Game details with ratings
- `GET /xmlapi2/hot?type=boardgame` - Trending games

**Important Notes**:
- Returns XML (not JSON) - requires XML parsing
- Consider caching responses as data doesn't change frequently
- BGG IDs are stable and can be used for linking

---

## RAWG Video Games Database

**Used for**: Video Games category

**API Documentation**: https://api.rawg.io/docs/

**Authentication**: API key (free tier: 20,000 requests/month)

**Rate Limits**: 20,000 requests per month (free), higher tiers available

**Key Endpoints**:
- `GET /api/games?search={query}` - Search games
- `GET /api/games/{id}` - Game details
- `GET /api/games?ordering=-metacritic` - Top-rated games
- `GET /api/games/{id}/stores` - Store links

**UK-Specific Considerations**:
- Game ratings use PEGI system in the UK
- Prices should be displayed in GBP
- Store links should point to UK storefronts where possible

**Setup**:
1. Register at https://rawg.io/apidocs
2. Get your free API key
3. Set `RAWG_API_KEY` environment variable

---

## Deep Links (Uber Eats, Just Eat, Deliveroo)

**Used for**: Takeaways category

These are not traditional APIs but URL-based deep links to UK food delivery platforms.

**Uber Eats (UK)**:
- Base URL: `https://www.ubereats.com/gb`
- Store link: `https://www.ubereats.com/gb/store/{slug}`
- Search: `https://www.ubereats.com/gb/search?q={query}`

**Just Eat (UK)**:
- Base URL: `https://www.just-eat.co.uk`
- Restaurant: `https://www.just-eat.co.uk/restaurants-{slug}`
- Area search: `https://find-and-update.company-information.service.gov.uk/company/04656315

**Deliveroo (UK)**:
- Base URL: `https://deliveroo.co.uk`
- Menu: `https://deliveroo.co.uk/menu/{slug}`
- Search: `https://deliveroo.co.uk/restaurants/london?postcode={postcode}`

---

## Caching Strategy

For production, implement caching to reduce API calls and improve performance:

1. **Static data** (board games, video games): Cache for 24 hours
2. **Semi-dynamic data** (films, TV shows, streaming): Cache for 6 hours
3. **Dynamic data** (restaurants, takeaways): Cache for 1 hour
4. **User-specific data** (preferences, swipes): No cache

Consider using:
- Vercel Edge Config for feature flags
- Redis (Upstash) for API response caching
- Next.js ISR for static page regeneration
