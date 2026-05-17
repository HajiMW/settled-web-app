import { Card, Category, SwipeAction } from '@/types';

/**
 * Recommendation Engine (Placeholder)
 *
 * This module provides recommendation logic for suggesting cards
 * to users based on their preferences and swipe history.
 *
 * In a production implementation, this would use:
 * - Collaborative filtering (users who liked X also liked Y)
 * - Content-based filtering (similar genres, directors, cuisines)
 * - Hybrid approaches combining both methods
 */

/**
 * Get personalised recommendations for a user in a specific category.
 */
export async function getRecommendations(
  userId: string,
  category: Category,
  limit: number = 10
): Promise<Card[]> {
  // Placeholder: In production, this would:
  // 1. Fetch user's swipe history from the database
  // 2. Analyse patterns in liked/disliked items
  // 3. Find similar items or items liked by similar users
  // 4. Return ranked recommendations

  // For now, return an empty array (mock data is loaded directly)
  return [];
}

/**
 * Filter out items the user has already seen in a room.
 */
export function filterSeenItems(
  cards: Card[],
  swipeHistory: SwipeAction[]
): Card[] {
  const seenCardIds = new Set(swipeHistory.map((action) => action.cardId));
  return cards.filter((card) => !seenCardIds.has(card.id));
}

/**
 * Calculate a match score between group members based on their swipe actions.
 * Returns a value between 0 and 1, where 1 means perfect agreement.
 */
export function calculateMatchScore(
  swipeActions: SwipeAction[],
  cardId: string,
  participantIds: string[]
): number {
  const cardActions = swipeActions.filter(
    (action) => action.cardId === cardId && participantIds.includes(action.userId)
  );

  if (cardActions.length === 0) return 0;

  const likes = cardActions.filter(
    (action) => action.action === 'like' || action.action === 'superlike'
  ).length;

  // Score is the proportion of participants who liked the item
  return likes / participantIds.length;
}

/**
 * Find items that all (or most) participants liked.
 * These are the group's matches.
 */
export function findGroupMatches(
  swipeActions: SwipeAction[],
  participantIds: string[],
  threshold: number = 1.0 // 1.0 = unanimous, 0.5 = majority
): string[] {
  // Get unique card IDs that have been swiped on
  const cardIds = Array.from(new Set(swipeActions.map((action) => action.cardId)));

  // Filter to cards where the match score meets the threshold
  return cardIds.filter((cardId) => {
    const score = calculateMatchScore(swipeActions, cardId, participantIds);
    return score >= threshold;
  });
}

/**
 * Rank cards by predicted preference for a user.
 * Uses a simple scoring system based on metadata similarity.
 */
export function rankCardsByPreference(
  cards: Card[],
  likedCards: Card[],
  _dislikedCards: Card[]
): Card[] {
  if (likedCards.length === 0) return cards;

  // Simple content-based scoring
  const scored = cards.map((card) => {
    let score = 0;

    // Boost score for similar ratings
    const avgLikedRating =
      likedCards.reduce((sum, c) => sum + c.rating, 0) / likedCards.length;
    score += 1 - Math.abs(card.rating - avgLikedRating) / 10;

    return { card, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  return scored.map((s) => s.card);
}
