/**
 * Deep Links Service for UK Food Delivery Platforms
 *
 * Generates deep links to Uber Eats, Just Eat, and Deliveroo
 * for specific restaurants and cuisines.
 *
 * All URLs use UK-specific domains.
 */

/**
 * Generate a deep link to Uber Eats for a restaurant or search.
 */
export function generateUberEatsLink(options: {
  restaurantSlug?: string;
  searchQuery?: string;
  postcode?: string;
}): string {
  const baseUrl = 'https://www.ubereats.com/gb';

  if (options.restaurantSlug) {
    return `${baseUrl}/store/${options.restaurantSlug}`;
  }

  if (options.searchQuery) {
    const params = new URLSearchParams();
    params.set('q', options.searchQuery);
    if (options.postcode) {
      params.set('pl', options.postcode);
    }
    return `${baseUrl}/search?${params.toString()}`;
  }

  return baseUrl;
}

/**
 * Generate a deep link to Just Eat for a restaurant or search.
 */
export function generateJustEatLink(options: {
  restaurantSlug?: string;
  searchQuery?: string;
  postcode?: string;
}): string {
  const baseUrl = 'https://www.just-eat.co.uk';

  if (options.restaurantSlug) {
    return `${baseUrl}/restaurants-${options.restaurantSlug}`;
  }

  if (options.postcode) {
    return `${baseUrl}/area/${options.postcode.replace(/\s/g, '-').toLowerCase()}`;
  }

  if (options.searchQuery) {
    return `${baseUrl}/search?q=${encodeURIComponent(options.searchQuery)}`;
  }

  return baseUrl;
}

/**
 * Generate a deep link to Deliveroo for a restaurant or search.
 */
export function generateDeliverooLink(options: {
  restaurantSlug?: string;
  searchQuery?: string;
  postcode?: string;
}): string {
  const baseUrl = 'https://deliveroo.co.uk';

  if (options.restaurantSlug) {
    return `${baseUrl}/menu/${options.restaurantSlug}`;
  }

  if (options.searchQuery && options.postcode) {
    return `${baseUrl}/search?q=${encodeURIComponent(options.searchQuery)}&postcode=${encodeURIComponent(options.postcode)}`;
  }

  if (options.postcode) {
    return `${baseUrl}/restaurants/london?postcode=${encodeURIComponent(options.postcode)}`;
  }

  return baseUrl;
}

/**
 * Generate all delivery platform links for a given restaurant/cuisine.
 */
export function generateAllDeliveryLinks(options: {
  restaurantName: string;
  postcode?: string;
}): {
  uberEats: string;
  justEat: string;
  deliveroo: string;
} {
  const slug = options.restaurantName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    uberEats: generateUberEatsLink({
      searchQuery: options.restaurantName,
      postcode: options.postcode,
    }),
    justEat: generateJustEatLink({
      searchQuery: options.restaurantName,
      postcode: options.postcode,
    }),
    deliveroo: generateDeliverooLink({
      searchQuery: options.restaurantName,
      postcode: options.postcode,
    }),
  };
}
