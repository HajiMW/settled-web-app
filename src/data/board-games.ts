import { Card, Category } from '@/types';

/**
 * Mock board game data for the Settled app.
 * Based on popular board games with verified BGG data.
 */
export const boardGamesData: Card[] = [
  {
    id: 'bg-001',
    category: Category.BOARD_GAMES,
    title: 'Catan',
    description: 'Trade, build, and settle the island of Catan in this classic strategy game. Collect resources, build roads and settlements, and become the dominant force on the island.',
    imageUrl: '/images/board-games/catan.jpg',
    rating: 7.1,
    metadata: {
      type: 'board_game',
      playerCount: '3-4',
      duration: '60-120 min',
      complexity: 'medium',
      category: 'Strategy',
    },
    deepLinks: {
      primary: 'https://www.catan.com/',
    },
  },
  {
    id: 'bg-002',
    category: Category.BOARD_GAMES,
    title: 'Ticket to Ride',
    description: 'Collect train cards to claim railway routes connecting cities across the map. The longer the routes, the more points you earn. Simple to learn, strategic to master.',
    imageUrl: '/images/board-games/ticket-to-ride.jpg',
    rating: 7.4,
    metadata: {
      type: 'board_game',
      playerCount: '2-5',
      duration: '30-60 min',
      complexity: 'light',
      category: 'Family/Strategy',
    },
    deepLinks: {
      primary: 'https://www.daysofwonder.com/tickettoride/',
    },
  },
  {
    id: 'bg-003',
    category: Category.BOARD_GAMES,
    title: 'Wingspan',
    description: 'A competitive bird-collection, engine-building game. Attract birds to your wildlife preserves, each with unique powers that chain together in satisfying combinations.',
    imageUrl: '/images/board-games/wingspan.jpg',
    rating: 8.1,
    metadata: {
      type: 'board_game',
      playerCount: '1-5',
      duration: '40-70 min',
      complexity: 'medium',
      category: 'Engine Building',
    },
    deepLinks: {
      primary: 'https://stonemaiergames.com/games/wingspan/',
    },
  },
  {
    id: 'bg-004',
    category: Category.BOARD_GAMES,
    title: 'Codenames',
    description: 'Two rival spymasters give one-word clues to help their teammates identify secret agents. A brilliant party game of word association and deduction.',
    imageUrl: '/images/board-games/codenames.jpg',
    rating: 7.5,
    metadata: {
      type: 'board_game',
      playerCount: '2-8',
      duration: '15-30 min',
      complexity: 'light',
      category: 'Party/Word Game',
    },
    deepLinks: {
      primary: 'https://czechgames.com/en/codenames/',
    },
  },
  {
    id: 'bg-005',
    category: Category.BOARD_GAMES,
    title: 'Azul',
    description: 'Draft colourful tiles from shared factory displays to your personal board, scoring points for specific patterns. Elegant abstract strategy with beautiful components.',
    imageUrl: '/images/board-games/azul.jpg',
    rating: 7.7,
    metadata: {
      type: 'board_game',
      playerCount: '2-4',
      duration: '30-45 min',
      complexity: 'light',
      category: 'Abstract Strategy',
    },
    deepLinks: {
      primary: 'https://www.nextmovegames.com/en/azul',
    },
  },
  {
    id: 'bg-006',
    category: Category.BOARD_GAMES,
    title: 'Pandemic',
    description: 'Work together as a team of specialists to treat infections around the world and find cures for four deadly diseases before they overwhelm humanity.',
    imageUrl: '/images/board-games/pandemic.jpg',
    rating: 7.5,
    metadata: {
      type: 'board_game',
      playerCount: '2-4',
      duration: '45 min',
      complexity: 'medium',
      category: 'Cooperative',
    },
    deepLinks: {
      primary: 'https://www.zmangames.com/en/games/pandemic/',
    },
  },
  {
    id: 'bg-007',
    category: Category.BOARD_GAMES,
    title: 'Spirit Island',
    description: 'A cooperative game where players take on the roles of spirits defending their island from colonising invaders. Complex, thematic, and deeply strategic.',
    imageUrl: '/images/board-games/spirit-island.jpg',
    rating: 8.3,
    metadata: {
      type: 'board_game',
      playerCount: '1-4',
      duration: '90-120 min',
      complexity: 'heavy',
      category: 'Cooperative/Strategy',
    },
    deepLinks: {
      primary: 'https://www.greaterthangames.com/spirit-island',
    },
  },
  {
    id: 'bg-008',
    category: Category.BOARD_GAMES,
    title: 'Exploding Kittens',
    description: 'A highly strategic kitty-powered version of Russian Roulette. Draw cards until someone draws an Exploding Kitten and is eliminated—unless they have a Defuse card.',
    imageUrl: '/images/board-games/exploding-kittens.jpg',
    rating: 6.1,
    metadata: {
      type: 'board_game',
      playerCount: '2-5',
      duration: '15 min',
      complexity: 'light',
      category: 'Party/Card Game',
    },
    deepLinks: {
      primary: 'https://www.explodingkittens.com/',
    },
  },
  {
    id: 'bg-009',
    category: Category.BOARD_GAMES,
    title: 'Terraforming Mars',
    description: 'Compete as corporations to transform Mars into a habitable planet. Manage resources, develop technologies, and raise the temperature, oxygen, and ocean levels.',
    imageUrl: '/images/board-games/terraforming-mars.jpg',
    rating: 8.4,
    metadata: {
      type: 'board_game',
      playerCount: '1-5',
      duration: '120 min',
      complexity: 'heavy',
      category: 'Engine Building/Strategy',
    },
    deepLinks: {
      primary: 'https://www.fryxgames.se/games/terraforming-mars/',
    },
  },
  {
    id: 'bg-010',
    category: Category.BOARD_GAMES,
    title: 'Wavelength',
    description: 'A social guessing game where teams try to read each other\'s minds. One player gives a clue on a spectrum (e.g., hot to cold) and teammates guess where the target is.',
    imageUrl: '/images/board-games/wavelength.jpg',
    rating: 7.2,
    metadata: {
      type: 'board_game',
      playerCount: '2-12',
      duration: '30-45 min',
      complexity: 'light',
      category: 'Party/Social Deduction',
    },
    deepLinks: {
      primary: 'https://www.wavelength.zone/',
    },
  },
];
