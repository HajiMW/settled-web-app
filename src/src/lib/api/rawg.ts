import { Card } from '@/types';
import { videoGamesData } from '@/data/video-games';

/**
 * RAWG Video Games Database API Service
 *
 * Currently returns mock data. To switch to real API:
 * 1. Get a free API key from https://rawg.io/apidocs
 * 2. Set RAWG_API_KEY in environment variables
 * 3. Set NEXT_PUBLIC_USE_MOCK_DATA=false
 *
 * Real API: https://api.rawg.io/docs/
 * Rate limit: 20,000 requests per month (free tier)
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

/**
 * Search for video games by query string.
 */
export async function searchVideoGames(query: string): Promise<Card[]> {
  if (USE_MOCK) {
    const lowerQuery = query.toLowerCase();
    return videoGamesData.filter(
      (game) =>
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${encodeURIComponent(query)}&page_size=12`
  // );
  // const data = await response.json();
  // return transformRAWGResults(data.results);

  return videoGamesData;
}

/**
 * Get detailed information about a specific video game.
 */
export async function getGameDetails(gameId: string): Promise<Card | null> {
  if (USE_MOCK) {
    return videoGamesData.find((game) => game.id === gameId) || null;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.rawg.io/api/games/${gameId}?key=${process.env.RAWG_API_KEY}`
  // );
  // const data = await response.json();
  // return transformRAWGGame(data);

  return null;
}

/**
 * Get popular/trending video games.
 */
export async function getPopularVideoGames(): Promise<Card[]> {
  if (USE_MOCK) {
    return videoGamesData;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&ordering=-metacritic&page_size=12&dates=2023-01-01,2024-12-31`
  // );
  // const data = await response.json();
  // return transformRAWGResults(data.results);

  return videoGamesData;
}
