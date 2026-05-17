import { Card, Category } from '@/types';

/**
 * Mock video game data for the Settled app.
 * Based on critically acclaimed games from 2023-2024 with verified Metacritic scores.
 */
export const videoGamesData: Card[] = [
  {
    id: 'vg-001',
    category: Category.VIDEO_GAMES,
    title: 'Baldur\'s Gate 3',
    description: 'A sprawling RPG set in the Dungeons & Dragons universe. Gather your party and return to the Forgotten Realms in a tale of fellowship, betrayal, and the lure of absolute power.',
    imageUrl: '/images/video-games/baldurs-gate-3.jpg',
    rating: 9.7,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S'],
      genre: 'RPG',
      playerCount: '1-4 (co-op)',
      ageRating: '18',
    },
    deepLinks: {
      primary: 'https://baldursgate3.game/',
    },
  },
  {
    id: 'vg-002',
    category: Category.VIDEO_GAMES,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'An epic adventure across the land and skies of Hyrule. Explore a vast world, discover new abilities, and uncover the secrets of the ancient kingdom.',
    imageUrl: '/images/video-games/zelda-totk.jpg',
    rating: 9.6,
    metadata: {
      type: 'video_game',
      platforms: ['Nintendo Switch'],
      genre: 'Action-Adventure',
      playerCount: '1',
      ageRating: '12',
    },
    deepLinks: {
      primary: 'https://www.nintendo.co.uk/Games/Nintendo-Switch-games/The-Legend-of-Zelda-Tears-of-the-Kingdom',
    },
  },
  {
    id: 'vg-003',
    category: Category.VIDEO_GAMES,
    title: 'Astro Bot',
    description: 'A charming 3D platformer that showcases the PS5\'s capabilities. Guide Astro through inventive levels filled with creative mechanics and delightful surprises.',
    imageUrl: '/images/video-games/astro-bot.jpg',
    rating: 9.4,
    metadata: {
      type: 'video_game',
      platforms: ['PS5'],
      genre: 'Platformer',
      playerCount: '1',
      ageRating: '7',
    },
    deepLinks: {
      primary: 'https://www.playstation.com/en-gb/games/astro-bot/',
    },
  },
  {
    id: 'vg-004',
    category: Category.VIDEO_GAMES,
    title: 'Elden Ring: Shadow of the Erdtree',
    description: 'The expansion to the award-winning Elden Ring takes players to the Land of Shadow, a vast new realm filled with deadly challenges and dark mysteries.',
    imageUrl: '/images/video-games/elden-ring-sote.jpg',
    rating: 9.5,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S'],
      genre: 'Action RPG',
      playerCount: '1 (online co-op)',
      ageRating: '16',
    },
    deepLinks: {
      primary: 'https://www.bandainamcoent.eu/games/elden-ring/shadow-of-the-erdtree',
    },
  },
  {
    id: 'vg-005',
    category: Category.VIDEO_GAMES,
    title: 'Marvel\'s Spider-Man 2',
    description: 'Swing through Marvel\'s New York as both Peter Parker and Miles Morales in this action-packed sequel. Face iconic villains including Venom and Kraven the Hunter.',
    imageUrl: '/images/video-games/spider-man-2.jpg',
    rating: 9.1,
    metadata: {
      type: 'video_game',
      platforms: ['PS5'],
      genre: 'Action-Adventure',
      playerCount: '1',
      ageRating: '16',
    },
    deepLinks: {
      primary: 'https://www.playstation.com/en-gb/games/marvels-spider-man-2/',
    },
  },
  {
    id: 'vg-006',
    category: Category.VIDEO_GAMES,
    title: 'Alan Wake 2',
    description: 'A survival horror experience that blurs the line between fiction and reality. FBI agent Saga Anderson and writer Alan Wake face a nightmarish threat in two interconnected stories.',
    imageUrl: '/images/video-games/alan-wake-2.jpg',
    rating: 9.0,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S'],
      genre: 'Survival Horror',
      playerCount: '1',
      ageRating: '18',
    },
    deepLinks: {
      primary: 'https://www.alanwake.com/',
    },
  },
  {
    id: 'vg-007',
    category: Category.VIDEO_GAMES,
    title: 'Hogwarts Legacy',
    description: 'An open-world action RPG set in the Wizarding World of the 1800s. Attend Hogwarts, learn spells, brew potions, and uncover an ancient secret that threatens the wizarding world.',
    imageUrl: '/images/video-games/hogwarts-legacy.jpg',
    rating: 8.6,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S', 'Nintendo Switch'],
      genre: 'Action RPG',
      playerCount: '1',
      ageRating: '12',
    },
    deepLinks: {
      primary: 'https://www.hogwartslegacy.com/',
    },
  },
  {
    id: 'vg-008',
    category: Category.VIDEO_GAMES,
    title: 'Metaphor: ReFantazio',
    description: 'A fantasy RPG from the creators of Persona 5. Embark on a journey through a kingdom in turmoil, where you must overcome trials and unite allies to challenge fate itself.',
    imageUrl: '/images/video-games/metaphor-refantazio.jpg',
    rating: 9.3,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S'],
      genre: 'JRPG',
      playerCount: '1',
      ageRating: '16',
    },
    deepLinks: {
      primary: 'https://metaphor.atlus.com/',
    },
  },
  {
    id: 'vg-009',
    category: Category.VIDEO_GAMES,
    title: 'Final Fantasy VII Rebirth',
    description: 'The second chapter in the Final Fantasy VII remake trilogy. Explore a vast open world beyond Midgar with Cloud and his companions as they pursue Sephiroth.',
    imageUrl: '/images/video-games/ff7-rebirth.jpg',
    rating: 9.2,
    metadata: {
      type: 'video_game',
      platforms: ['PS5'],
      genre: 'Action RPG',
      playerCount: '1',
      ageRating: '16',
    },
    deepLinks: {
      primary: 'https://ffvii.square-enix-games.com/en-gb/games/rebirth',
    },
  },
  {
    id: 'vg-010',
    category: Category.VIDEO_GAMES,
    title: 'Like a Dragon: Infinite Wealth',
    description: 'A globe-trotting RPG adventure spanning Japan and Hawaii. Follow Ichiban Kasuga and Kazuma Kiryu in an emotional story of friendship, redemption, and finding one\'s place in the world.',
    imageUrl: '/images/video-games/like-a-dragon.jpg',
    rating: 9.0,
    metadata: {
      type: 'video_game',
      platforms: ['PC', 'PS5', 'Xbox Series X/S'],
      genre: 'JRPG',
      playerCount: '1',
      ageRating: '18',
    },
    deepLinks: {
      primary: 'https://www.sega.com/games/like-a-dragon-infinite-wealth',
    },
  },
];
