import { Card, Category } from '@/types';

/**
 * Mock restaurant data for the Settled app.
 * Based on popular UK restaurant chains and dining options.
 */
export const restaurantsData: Card[] = [
  {
    id: 'restaurant-001',
    category: Category.RESTAURANTS,
    title: 'Nando\'s',
    description: 'Portuguese-inspired flame-grilled peri-peri chicken restaurant. Choose your spice level from Lemon & Herb to Extra Hot, with a variety of sides and starters.',
    imageUrl: '/images/restaurants/nandos.jpg',
    rating: 4.2,
    metadata: {
      type: 'restaurant',
      cuisine: 'Portuguese/Chicken',
      priceRange: '££',
      location: 'Nationwide',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free options', 'Halal (selected locations)'],
    },
    deepLinks: {
      booking: 'https://www.nandos.co.uk/restaurants',
    },
  },
  {
    id: 'restaurant-002',
    category: Category.RESTAURANTS,
    title: 'Wagamama',
    description: 'Japanese-inspired Asian cuisine served in a vibrant, communal dining setting. Known for ramen, katsu curries, and fresh teppanyaki dishes.',
    imageUrl: '/images/restaurants/wagamama.jpg',
    rating: 4.3,
    metadata: {
      type: 'restaurant',
      cuisine: 'Japanese/Asian',
      priceRange: '££',
      location: 'Nationwide',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free options'],
    },
    deepLinks: {
      booking: 'https://www.wagamama.com/restaurants',
    },
  },
  {
    id: 'restaurant-003',
    category: Category.RESTAURANTS,
    title: 'Pizza Express',
    description: 'Italian-inspired restaurant chain known for hand-stretched pizzas, fresh pasta, and classic Italian desserts. Dough balls are a must-try starter.',
    imageUrl: '/images/restaurants/pizza-express.jpg',
    rating: 4.0,
    metadata: {
      type: 'restaurant',
      cuisine: 'Italian',
      priceRange: '££',
      location: 'Nationwide',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free bases'],
    },
    deepLinks: {
      booking: 'https://www.pizzaexpress.com/find-a-restaurant',
    },
  },
  {
    id: 'restaurant-004',
    category: Category.RESTAURANTS,
    title: 'Five Guys',
    description: 'American-style burger restaurant with customisable burgers, hand-cut chips, and milkshakes. All burgers come with unlimited free toppings.',
    imageUrl: '/images/restaurants/five-guys.jpg',
    rating: 4.1,
    metadata: {
      type: 'restaurant',
      cuisine: 'American/Burgers',
      priceRange: '£££',
      location: 'Nationwide',
      dietaryOptions: ['Gluten-free (bunless)', 'Vegetarian'],
    },
    deepLinks: {
      booking: 'https://www.fiveguys.co.uk/locations',
    },
  },
  {
    id: 'restaurant-005',
    category: Category.RESTAURANTS,
    title: 'Franco Manca',
    description: 'Sourdough pizza restaurant using a slow-rising dough proved for at least 20 hours. Toppings sourced from small-scale Italian and British producers.',
    imageUrl: '/images/restaurants/franco-manca.jpg',
    rating: 4.4,
    metadata: {
      type: 'restaurant',
      cuisine: 'Italian/Pizza',
      priceRange: '£',
      location: 'Major cities',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free bases'],
    },
    deepLinks: {
      booking: 'https://www.francomanca.co.uk/restaurants',
    },
  },
  {
    id: 'restaurant-006',
    category: Category.RESTAURANTS,
    title: 'Pho',
    description: 'Vietnamese street food restaurant specialising in pho noodle soups, banh mi sandwiches, and fresh summer rolls. Aromatic broths simmered for hours.',
    imageUrl: '/images/restaurants/pho.jpg',
    rating: 4.3,
    metadata: {
      type: 'restaurant',
      cuisine: 'Vietnamese',
      priceRange: '££',
      location: 'Major cities',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free options'],
    },
    deepLinks: {
      booking: 'https://www.phocafe.co.uk/restaurants',
    },
  },
  {
    id: 'restaurant-007',
    category: Category.RESTAURANTS,
    title: 'Dishoom',
    description: 'Bombay-inspired café serving breakfast, lunch, and dinner. Known for their black daal, bacon naan roll, and chai. Inspired by the Irani cafés of 1960s Bombay.',
    imageUrl: '/images/restaurants/dishoom.jpg',
    rating: 4.7,
    metadata: {
      type: 'restaurant',
      cuisine: 'Indian/Bombay Café',
      priceRange: '££',
      location: 'Major cities',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free options'],
    },
    deepLinks: {
      booking: 'https://www.dishoom.com/reservations',
    },
  },
  {
    id: 'restaurant-008',
    category: Category.RESTAURANTS,
    title: 'Harvester',
    description: 'Family-friendly restaurant chain known for its unlimited salad bar, rotisserie chicken, and grilled dishes. Great value set menus available.',
    imageUrl: '/images/restaurants/harvester.jpg',
    rating: 3.8,
    metadata: {
      type: 'restaurant',
      cuisine: 'British/American',
      priceRange: '££',
      location: 'Nationwide',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free menu'],
    },
    deepLinks: {
      booking: 'https://www.harvester.co.uk/restaurants',
    },
  },
  {
    id: 'restaurant-009',
    category: Category.RESTAURANTS,
    title: 'Wetherspoons',
    description: 'Pub chain offering affordable food and drinks in characterful buildings. Known for their breakfast menu, curry club, and steak nights.',
    imageUrl: '/images/restaurants/wetherspoons.jpg',
    rating: 3.6,
    metadata: {
      type: 'restaurant',
      cuisine: 'British Pub',
      priceRange: '£',
      location: 'Nationwide',
      dietaryOptions: ['Vegetarian', 'Vegan options', 'Gluten-free menu'],
    },
    deepLinks: {
      booking: 'https://www.jdwetherspoon.com/pubs',
    },
  },
  {
    id: 'restaurant-010',
    category: Category.RESTAURANTS,
    title: 'Honest Burgers',
    description: 'British burger restaurant using free-range beef from The Ginger Pig butchers. Rosemary salted chips and seasonal specials change monthly.',
    imageUrl: '/images/restaurants/honest-burgers.jpg',
    rating: 4.5,
    metadata: {
      type: 'restaurant',
      cuisine: 'British/Burgers',
      priceRange: '££',
      location: 'Major cities',
      dietaryOptions: ['Vegetarian', 'Vegan', 'Gluten-free buns'],
    },
    deepLinks: {
      booking: 'https://www.honestburgers.co.uk/locations',
    },
  },
];
