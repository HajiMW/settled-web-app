/**
 * JustWatch API Service
 *
 * Provides streaming availability information for films and TV shows in the UK.
 *
 * Currently returns mock data. To switch to real API:
 * 1. Apply for JustWatch API access
 * 2. Set JUSTWATCH_API_KEY in environment variables
 * 3. Set NEXT_PUBLIC_USE_MOCK_DATA=false
 *
 * Note: JustWatch API is not publicly available - requires partnership.
 * Alternative: Use TMDB watch/providers endpoint (free with API key).
 * Real API: https://apis.justwatch.com/docs/api/
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

export interface StreamingAvailability {
  title: string;
  platforms: StreamingPlatform[];
}

export interface StreamingPlatform {
  name: string;
  url: string;
  type: 'flatrate' | 'rent' | 'buy';
  price?: number; // GBP
}

/**
 * Get streaming availability for a title in the UK (region: GB).
 */
export async function getStreamingAvailability(
  title: string,
  region: string = 'GB'
): Promise<StreamingAvailability> {
  if (USE_MOCK) {
    // Return mock streaming data based on common UK platforms
    return {
      title,
      platforms: [
        { name: 'Netflix', url: 'https://www.netflix.com/', type: 'flatrate' },
        { name: 'Amazon Prime Video', url: 'https://www.amazon.co.uk/gp/video', type: 'flatrate' },
        { name: 'Disney+', url: 'https://www.disneyplus.com/', type: 'flatrate' },
        { name: 'Apple TV+', url: 'https://tv.apple.com/gb', type: 'flatrate' },
        { name: 'NOW TV', url: 'https://www.nowtv.com/', type: 'flatrate' },
      ],
    };
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://apis.justwatch.com/content/titles/en_GB/popular?body={"content_types":["movie","show"],"query":"${title}"}`,
  //   { headers: { 'Authorization': `Bearer ${process.env.JUSTWATCH_API_KEY}` } }
  // );
  // const data = await response.json();
  // return transformJustWatchResult(data);

  return { title, platforms: [] };
}
