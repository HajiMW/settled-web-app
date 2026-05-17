import { Card, Category } from '@/types';
import { filmsData } from '@/data/films';
import { tvShowsData } from '@/data/tv-shows';

/**
 * IMDB/TMDB API Service
 *
 * Currently returns mock data. To switch to real API:
 * 1. Set IMDB_API_KEY in environment variables
 * 2. Set NEXT_PUBLIC_USE_MOCK_DATA=false
 * 3. Uncomment the real API calls below
 *
 * Real API: https://www.omdbapi.com/ or https://api.themoviedb.org/3/
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

/**
 * Search for films by query string.
 */
export async function searchFilms(query: string): Promise<Card[]> {
  if (USE_MOCK) {
    const lowerQuery = query.toLowerCase();
    return filmsData.filter(
      (film) =>
        film.title.toLowerCase().includes(lowerQuery) ||
        film.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${process.env.IMDB_API_KEY}&query=${encodeURIComponent(query)}&region=GB`
  // );
  // const data = await response.json();
  // return transformTMDBResults(data.results);

  return filmsData;
}

/**
 * Get detailed information about a specific film.
 */
export async function getFilmDetails(filmId: string): Promise<Card | null> {
  if (USE_MOCK) {
    return filmsData.find((film) => film.id === filmId) || null;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.IMDB_API_KEY}&region=GB`
  // );
  // const data = await response.json();
  // return transformTMDBFilm(data);

  return null;
}

/**
 * Search for TV shows by query string.
 */
export async function searchTVShows(query: string): Promise<Card[]> {
  if (USE_MOCK) {
    const lowerQuery = query.toLowerCase();
    return tvShowsData.filter(
      (show) =>
        show.title.toLowerCase().includes(lowerQuery) ||
        show.description.toLowerCase().includes(lowerQuery)
    );
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/search/tv?api_key=${process.env.IMDB_API_KEY}&query=${encodeURIComponent(query)}&region=GB`
  // );
  // const data = await response.json();
  // return transformTMDBTVResults(data.results);

  return tvShowsData;
}

/**
 * Get popular films (for the default card deck).
 */
export async function getPopularFilms(): Promise<Card[]> {
  if (USE_MOCK) {
    return filmsData;
  }

  // Real API implementation placeholder:
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.IMDB_API_KEY}&region=GB`
  // );
  // const data = await response.json();
  // return transformTMDBResults(data.results);

  return filmsData;
}

/**
 * Get popular TV shows (for the default card deck).
 */
export async function getPopularTVShows(): Promise<Card[]> {
  if (USE_MOCK) {
    return tvShowsData;
  }

  return tvShowsData;
}
