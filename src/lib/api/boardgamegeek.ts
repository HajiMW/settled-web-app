import { Card } from '@/types';
import { boardGamesData } from '@/data/board-games';

/**
 * BoardGameGeek API Service
 *
 * Currently returns mock data. To switch to real API:
 * 1. No API key required (BGG XML API is public)
 * 2. Set NEXT_PUBLIC_USE_MOCK_DATA=false
 * 3. Uncomment the real API calls below
 *
 * Real API: https://boardgamegeek.com/wiki/page/BGG_XML_API2
 * Rate limit: Be respectful - no more than 1 request per second
 * Note: BGG API returns XML, so you'll need an XML parser
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

/**
 * Search for board games by query string.
 */
export async function searchBoardGames(query: string): Promise<Card[]> {
  if (USE_MOCK) {
    const lowerQuery = query.toLowerCase();
    return boardGamesData.filter(
      (game) =>
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(query)}&type=boardgame`
  // );
  // const xmlText = await response.text();
  // Parse XML and transform to Card[]

  return boardGamesData;
}

/**
 * Get detailed information about a specific board game.
 */
export async function getBoardGameDetails(gameId: string): Promise<Card | null> {
  if (USE_MOCK) {
    return boardGamesData.find((game) => game.id === gameId) || null;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://boardgamegeek.com/xmlapi2/thing?id=${gameId}&stats=1`
  // );
  // const xmlText = await response.text();
  // Parse XML and transform to Card

  return null;
}

/**
 * Get popular/hot board games.
 */
export async function getPopularBoardGames(): Promise<Card[]> {
  if (USE_MOCK) {
    return boardGamesData;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://boardgamegeek.com/xmlapi2/hot?type=boardgame`
  // );
  // const xmlText = await response.text();
  // Parse XML and transform to Card[]

  return boardGamesData;
}
