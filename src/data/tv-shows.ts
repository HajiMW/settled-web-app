import { Card, Category } from '@/types';

/**
 * Mock TV show data for the Settled app.
 * Based on popular UK TV shows from 2023-2024.
 */
export const tvShowsData: Card[] = [
  {
    id: 'tv-001',
    category: Category.TV_SHOWS,
    title: 'Baby Reindeer',
    description: 'A struggling comedian\'s life is turned upside down when a vulnerable woman takes a shine to him, leading to a complex and disturbing relationship.',
    imageUrl: '/images/tv/baby-reindeer.jpg',
    rating: 8.1,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 1,
      genre: ['Drama', 'Thriller', 'True Story'],
      streamingPlatforms: ['Netflix'],
    },
    deepLinks: {
      streaming: {
        netflix: 'https://www.netflix.com/title/baby-reindeer',
      },
    },
  },
  {
    id: 'tv-002',
    category: Category.TV_SHOWS,
    title: 'Mr Bates vs The Post Office',
    description: 'The true story of one of the greatest miscarriages of justice in British history, as hundreds of sub-postmasters were wrongly prosecuted due to a faulty IT system.',
    imageUrl: '/images/tv/mr-bates-post-office.jpg',
    rating: 8.6,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 1,
      genre: ['Drama', 'True Story'],
      streamingPlatforms: ['ITVX'],
    },
    deepLinks: {
      streaming: {
        itvx: 'https://www.itv.com/watch/mr-bates-vs-the-post-office',
      },
    },
  },
  {
    id: 'tv-003',
    category: Category.TV_SHOWS,
    title: 'Fool Me Once',
    description: 'A widowed military veteran discovers a shocking secret about her late husband when she sees him alive on a nanny cam, unravelling a web of lies and deceit.',
    imageUrl: '/images/tv/fool-me-once.jpg',
    rating: 6.8,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 1,
      genre: ['Crime', 'Drama', 'Mystery'],
      streamingPlatforms: ['Netflix'],
    },
    deepLinks: {
      streaming: {
        netflix: 'https://www.netflix.com/title/fool-me-once',
      },
    },
  },
  {
    id: 'tv-004',
    category: Category.TV_SHOWS,
    title: 'Doctor Who',
    description: 'The Doctor and their companions travel through time and space, encountering alien threats and historical events in this long-running British science fiction series.',
    imageUrl: '/images/tv/doctor-who.jpg',
    rating: 7.8,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 14,
      genre: ['Science Fiction', 'Adventure', 'Drama'],
      streamingPlatforms: ['BBC iPlayer', 'Disney+'],
    },
    deepLinks: {
      streaming: {
        bbc: 'https://www.bbc.co.uk/iplayer/episodes/p0gfqp2y/doctor-who',
        disney: 'https://www.disneyplus.com/series/doctor-who',
      },
    },
  },
  {
    id: 'tv-005',
    category: Category.TV_SHOWS,
    title: 'Industry',
    description: 'Young graduates compete for permanent positions at a prestigious London investment bank, navigating the cutthroat world of international finance.',
    imageUrl: '/images/tv/industry.jpg',
    rating: 7.6,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 3,
      genre: ['Drama', 'Thriller'],
      streamingPlatforms: ['BBC iPlayer', 'HBO Max'],
    },
    deepLinks: {
      streaming: {
        bbc: 'https://www.bbc.co.uk/iplayer/episodes/m000qd86/industry',
      },
    },
  },
  {
    id: 'tv-006',
    category: Category.TV_SHOWS,
    title: 'Criminal Record',
    description: 'Two detectives from different backgrounds clash over a historic murder case when an anonymous phone call throws doubt on a conviction.',
    imageUrl: '/images/tv/criminal-record.jpg',
    rating: 7.0,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 1,
      genre: ['Crime', 'Drama', 'Thriller'],
      streamingPlatforms: ['Apple TV+'],
    },
    deepLinks: {
      streaming: {
        apple: 'https://tv.apple.com/gb/show/criminal-record',
      },
    },
  },
  {
    id: 'tv-007',
    category: Category.TV_SHOWS,
    title: 'The Tourist',
    description: 'A British man wakes up in the Australian outback with no memory, pursued by a vast tank truck trying to drive him off the road.',
    imageUrl: '/images/tv/the-tourist.jpg',
    rating: 7.2,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 2,
      genre: ['Thriller', 'Mystery', 'Drama'],
      streamingPlatforms: ['BBC iPlayer', 'Netflix'],
    },
    deepLinks: {
      streaming: {
        bbc: 'https://www.bbc.co.uk/iplayer/episodes/p0b4vlg3/the-tourist',
        netflix: 'https://www.netflix.com/title/the-tourist',
      },
    },
  },
  {
    id: 'tv-008',
    category: Category.TV_SHOWS,
    title: 'Sex Education',
    description: 'A socially awkward teenager teams up with a rebellious classmate to set up an underground sex therapy clinic at their school.',
    imageUrl: '/images/tv/sex-education.jpg',
    rating: 8.2,
    metadata: {
      type: 'tv_show',
      year: 2023,
      seasons: 4,
      genre: ['Comedy', 'Drama'],
      streamingPlatforms: ['Netflix'],
    },
    deepLinks: {
      streaming: {
        netflix: 'https://www.netflix.com/title/sex-education',
      },
    },
  },
  {
    id: 'tv-009',
    category: Category.TV_SHOWS,
    title: 'Slow Horses',
    description: 'A dysfunctional team of MI5 agents—who have all made career-ending mistakes—serve in a dumping ground department of British intelligence.',
    imageUrl: '/images/tv/slow-horses.jpg',
    rating: 8.1,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 4,
      genre: ['Thriller', 'Drama', 'Espionage'],
      streamingPlatforms: ['Apple TV+'],
    },
    deepLinks: {
      streaming: {
        apple: 'https://tv.apple.com/gb/show/slow-horses',
      },
    },
  },
  {
    id: 'tv-010',
    category: Category.TV_SHOWS,
    title: 'Shogun',
    description: 'Set in 1600 Japan, an English sailor becomes embroiled in a power struggle between rival feudal lords vying for control of the country.',
    imageUrl: '/images/tv/shogun.jpg',
    rating: 8.7,
    metadata: {
      type: 'tv_show',
      year: 2024,
      seasons: 1,
      genre: ['Drama', 'Historical', 'War'],
      streamingPlatforms: ['Disney+', 'Star'],
    },
    deepLinks: {
      streaming: {
        disney: 'https://www.disneyplus.com/series/shogun',
      },
    },
  },
];
