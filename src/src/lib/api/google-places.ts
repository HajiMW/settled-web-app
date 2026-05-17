import { Card, Category } from '@/types';
import { restaurantsData } from '@/data/restaurants';

/**
 * Google Places API Service
 *
 * Currently returns mock data. To switch to real API:
 * 1. Set GOOGLE_PLACES_API_KEY in environment variables
 * 2. Set NEXT_PUBLIC_USE_MOCK_DATA=false
 * 3. Uncomment the real API calls below
 *
 * Real API: https://developers.google.com/maps/documentation/places/web-service
 * Rate limit: 100 requests per second (per project)
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

/**
 * Search for restaurants near a UK postcode.
 */
export async function searchRestaurants(postcode: string): Promise<Card[]> {
  if (USE_MOCK) {
    return restaurantsData;
  }

  // Real API implementation placeholder:
  // 1. Geocode the postcode to lat/lng
  // const geocodeResponse = await fetch(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(postcode)}&region=gb&key=${process.env.GOOGLE_PLACES_API_KEY}`
  // );
  // const geocodeData = await geocodeResponse.json();
  // const { lat, lng } = geocodeData.results[0].geometry.location;
  //
  // 2. Search for nearby restaurants
  // const placesResponse = await fetch(
  //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=restaurant&key=${process.env.GOOGLE_PLACES_API_KEY}`
  // );
  // const placesData = await placesResponse.json();
  // return transformPlacesResults(placesData.results);

  return restaurantsData;
}

/**
 * Get detailed information about a specific place.
 */
export async function getPlaceDetails(placeId: string): Promise<Card | null> {
  if (USE_MOCK) {
    return restaurantsData.find((r) => r.id === placeId) || null;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_address,price_level,photos,opening_hours,website&key=${process.env.GOOGLE_PLACES_API_KEY}`
  // );
  // const data = await response.json();
  // return transformPlaceDetail(data.result);

  return null;
}
