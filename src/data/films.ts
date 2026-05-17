import { Card, Category } from '@/types';

/**
 * Mock film data for the Settled app.
 * Based on popular and critically acclaimed films from 2023-2024.
 */
export const filmsData: Card[] = [
  {
    id: 'film-001',
    category: Category.FILMS,
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    imageUrl: '/images/films/oppenheimer.jpg',
    rating: 8.3,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Christopher Nolan',
      genre: ['Biography', 'Drama', 'History'],
      runtime: 180,
      streamingPlatforms: ['Sky Go', 'NOW TV'],
    },
    deepLinks: {
      streaming: {
        sky: 'https://www.sky.com/watch/oppenheimer',
        now: 'https://www.nowtv.com/watch/oppenheimer',
      },
    },
  },
  {
    id: 'film-002',
    category: Category.FILMS,
    title: 'Barbie',
    description: 'Barbie and Ken are having the time of their lives in the colourful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    imageUrl: '/images/films/barbie.jpg',
    rating: 6.8,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Greta Gerwig',
      genre: ['Adventure', 'Comedy', 'Fantasy'],
      runtime: 114,
      streamingPlatforms: ['Sky Go', 'NOW TV'],
    },
    deepLinks: {
      streaming: {
        sky: 'https://www.sky.com/watch/barbie',
        now: 'https://www.nowtv.com/watch/barbie',
      },
    },
  },
  {
    id: 'film-003',
    category: Category.FILMS,
    title: 'Poor Things',
    description: 'The incredible tale of a young woman brought back to life by an unorthodox scientist. A wildly inventive exploration of identity, freedom and self-discovery.',
    imageUrl: '/images/films/poor-things.jpg',
    rating: 7.7,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Yorgos Lanthimos',
      genre: ['Comedy', 'Drama', 'Romance'],
      runtime: 141,
      streamingPlatforms: ['Disney+', 'Star'],
    },
    deepLinks: {
      streaming: {
        disney: 'https://www.disneyplus.com/movies/poor-things',
      },
    },
  },
  {
    id: 'film-004',
    category: Category.FILMS,
    title: 'Killers of the Flower Moon',
    description: 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.',
    imageUrl: '/images/films/killers-flower-moon.jpg',
    rating: 7.5,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Martin Scorsese',
      genre: ['Crime', 'Drama', 'History'],
      runtime: 206,
      streamingPlatforms: ['Apple TV+'],
    },
    deepLinks: {
      streaming: {
        apple: 'https://tv.apple.com/gb/movie/killers-of-the-flower-moon',
      },
    },
  },
  {
    id: 'film-005',
    category: Category.FILMS,
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with the Fremen to seek revenge against those who destroyed his family, facing a choice between the love of his life and the fate of the universe.',
    imageUrl: '/images/films/dune-part-two.jpg',
    rating: 8.5,
    metadata: {
      type: 'film',
      year: 2024,
      director: 'Denis Villeneuve',
      genre: ['Science Fiction', 'Adventure', 'Drama'],
      runtime: 166,
      streamingPlatforms: ['Sky Go', 'NOW TV'],
    },
    deepLinks: {
      streaming: {
        sky: 'https://www.sky.com/watch/dune-part-two',
        now: 'https://www.nowtv.com/watch/dune-part-two',
      },
    },
  },
  {
    id: 'film-006',
    category: Category.FILMS,
    title: 'Wonka',
    description: 'Based on the extraordinary character at the centre of Charlie and the Chocolate Factory, this tells the wondrous story of how the world\'s greatest inventor became the beloved Willy Wonka.',
    imageUrl: '/images/films/wonka.jpg',
    rating: 6.9,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Paul King',
      genre: ['Adventure', 'Comedy', 'Family', 'Fantasy', 'Musical'],
      runtime: 116,
      streamingPlatforms: ['Netflix'],
    },
    deepLinks: {
      streaming: {
        netflix: 'https://www.netflix.com/title/wonka',
      },
    },
  },
  {
    id: 'film-007',
    category: Category.FILMS,
    title: 'All of Us Strangers',
    description: 'A screenwriter drawn back to his childhood home enters a relationship with a mysterious neighbour as he also reconnects with his parents, who died 30 years earlier.',
    imageUrl: '/images/films/all-of-us-strangers.jpg',
    rating: 7.5,
    metadata: {
      type: 'film',
      year: 2023,
      director: 'Andrew Haigh',
      genre: ['Drama', 'Fantasy', 'Romance'],
      runtime: 105,
      streamingPlatforms: ['Disney+', 'Star'],
    },
    deepLinks: {
      streaming: {
        disney: 'https://www.disneyplus.com/movies/all-of-us-strangers',
      },
    },
  },
  {
    id: 'film-008',
    category: Category.FILMS,
    title: 'The Fall Guy',
    description: 'A battered stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life.',
    imageUrl: '/images/films/the-fall-guy.jpg',
    rating: 7.0,
    metadata: {
      type: 'film',
      year: 2024,
      director: 'David Leitch',
      genre: ['Action', 'Comedy', 'Romance'],
      runtime: 126,
      streamingPlatforms: ['Amazon Prime Video'],
    },
    deepLinks: {
      streaming: {
        prime: 'https://www.amazon.co.uk/dp/the-fall-guy',
      },
    },
  },
  {
    id: 'film-009',
    category: Category.FILMS,
    title: 'Despicable Me 4',
    description: 'Gru and Lucy and their girls welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his girlfriend Valentina.',
    imageUrl: '/images/films/despicable-me-4.jpg',
    rating: 6.5,
    metadata: {
      type: 'film',
      year: 2024,
      director: 'Chris Renaud',
      genre: ['Animation', 'Adventure', 'Comedy', 'Family'],
      runtime: 94,
      streamingPlatforms: ['Netflix'],
    },
    deepLinks: {
      streaming: {
        netflix: 'https://www.netflix.com/title/despicable-me-4',
      },
    },
  },
  {
    id: 'film-010',
    category: Category.FILMS,
    title: 'Anora',
    description: 'A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of a Russian oligarch.',
    imageUrl: '/images/films/anora.jpg',
    rating: 7.8,
    metadata: {
      type: 'film',
      year: 2024,
      director: 'Sean Baker',
      genre: ['Comedy', 'Drama', 'Romance'],
      runtime: 139,
      streamingPlatforms: ['MUBI'],
    },
    deepLinks: {
      streaming: {
        mubi: 'https://mubi.com/films/anora',
      },
    },
  },
];
