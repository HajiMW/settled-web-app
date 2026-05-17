import { Card, Category } from '@/types';

/**
 * Mock activities data for the Settled app.
 * Based on popular UK group activities.
 */
export const activitiesData: Card[] = [
  {
    id: 'activity-001',
    category: Category.ACTIVITIES,
    title: 'Cinema',
    description: 'Catch the latest blockbusters or indie films at your local cinema. Perfect for groups who want a relaxed evening with popcorn and a great film.',
    imageUrl: '/images/activities/cinema.jpg',
    rating: 4.3,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£10-£15 per person',
      groupSize: '2-10',
      duration: '2-3 hours',
    },
    deepLinks: {
      booking: 'https://www.odeon.co.uk/',
    },
  },
  {
    id: 'activity-002',
    category: Category.ACTIVITIES,
    title: 'Bowling',
    description: 'Ten-pin bowling is a classic group activity suitable for all ages and abilities. Most venues offer cosmic bowling with music and lights in the evenings.',
    imageUrl: '/images/activities/bowling.jpg',
    rating: 4.2,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£7-£12 per person per game',
      groupSize: '2-8',
      duration: '1-2 hours',
    },
    deepLinks: {
      booking: 'https://www.hollywoodbowl.co.uk/',
    },
  },
  {
    id: 'activity-003',
    category: Category.ACTIVITIES,
    title: 'Escape Room',
    description: 'Work together to solve puzzles, find clues, and escape a themed room within 60 minutes. Themes range from detective mysteries to horror and sci-fi adventures.',
    imageUrl: '/images/activities/escape-room.jpg',
    rating: 4.6,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£20-£35 per person',
      groupSize: '2-6',
      duration: '60-90 minutes',
    },
    deepLinks: {
      booking: 'https://www.escapehunt.com/uk/',
    },
  },
  {
    id: 'activity-004',
    category: Category.ACTIVITIES,
    title: 'Mini Golf',
    description: 'Indoor crazy golf courses with creative themes, UV lighting, and cocktail bars. A fun, competitive activity that doesn\'t require any sporting ability.',
    imageUrl: '/images/activities/mini-golf.jpg',
    rating: 4.4,
    metadata: {
      type: 'activity',
      locationType: 'Indoor/Outdoor',
      priceRange: '£8-£14 per person',
      groupSize: '2-6',
      duration: '45-90 minutes',
    },
    deepLinks: {
      booking: 'https://www.puttshutt.com/',
    },
  },
  {
    id: 'activity-005',
    category: Category.ACTIVITIES,
    title: 'Pub Quiz',
    description: 'Test your general knowledge at a local pub quiz. Most pubs host weekly quiz nights with prizes for the winning team. A great excuse for a midweek pint.',
    imageUrl: '/images/activities/pub-quiz.jpg',
    rating: 4.5,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£1-£3 per person (entry)',
      groupSize: '2-8',
      duration: '1.5-2.5 hours',
    },
    deepLinks: {},
  },
  {
    id: 'activity-006',
    category: Category.ACTIVITIES,
    title: 'Karaoke',
    description: 'Sing your heart out in a private karaoke booth with your mates. Most venues offer drinks packages and a huge selection of songs from every era.',
    imageUrl: '/images/activities/karaoke.jpg',
    rating: 4.3,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£8-£15 per person per hour',
      groupSize: '2-15',
      duration: '1-3 hours',
    },
    deepLinks: {
      booking: 'https://www.luckyvoice.com/',
    },
  },
  {
    id: 'activity-007',
    category: Category.ACTIVITIES,
    title: 'Trampoline Park',
    description: 'Bounce, flip, and play at an indoor trampoline park. Features include foam pits, dodgeball courts, slam dunk zones, and ninja warrior courses.',
    imageUrl: '/images/activities/trampoline-park.jpg',
    rating: 4.1,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£10-£18 per person',
      groupSize: '2-20',
      duration: '1-2 hours',
    },
    deepLinks: {
      booking: 'https://www.flipout.co.uk/',
    },
  },
  {
    id: 'activity-008',
    category: Category.ACTIVITIES,
    title: 'Axe Throwing',
    description: 'Channel your inner Viking with a guided axe-throwing session. Trained instructors teach you the technique before you compete against your friends.',
    imageUrl: '/images/activities/axe-throwing.jpg',
    rating: 4.5,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£20-£30 per person',
      groupSize: '2-12',
      duration: '1-1.5 hours',
    },
    deepLinks: {
      booking: 'https://www.whistlepunks.com/',
    },
  },
  {
    id: 'activity-009',
    category: Category.ACTIVITIES,
    title: 'Go Karting',
    description: 'Race against your friends on an indoor or outdoor karting circuit. Most venues offer arrive-and-drive sessions as well as group race packages.',
    imageUrl: '/images/activities/go-karting.jpg',
    rating: 4.4,
    metadata: {
      type: 'activity',
      locationType: 'Indoor/Outdoor',
      priceRange: '£25-£50 per person',
      groupSize: '2-12',
      duration: '1-2 hours',
    },
    deepLinks: {
      booking: 'https://www.teamworks-karting.co.uk/',
    },
  },
  {
    id: 'activity-010',
    category: Category.ACTIVITIES,
    title: 'Pottery Painting',
    description: 'Choose a ceramic piece and paint your own design in a relaxed, creative environment. A calming group activity with a keepsake to take home.',
    imageUrl: '/images/activities/pottery-painting.jpg',
    rating: 4.3,
    metadata: {
      type: 'activity',
      locationType: 'Indoor',
      priceRange: '£10-£25 per person',
      groupSize: '2-10',
      duration: '1.5-2.5 hours',
    },
    deepLinks: {},
  },
];
