'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Category } from '@/types';
import { validateUKPostcode } from '@/lib/utils/helpers';

const categoryOptions = [
  { value: Category.FILMS, label: 'Films', icon: '🎬' },
  { value: Category.TV_SHOWS, label: 'TV Shows', icon: '📺' },
  { value: Category.TAKEAWAYS, label: 'Takeaways', icon: '🥡' },
  { value: Category.RESTAURANTS, label: 'Restaurants', icon: '🍽️' },
  { value: Category.BOARD_GAMES, label: 'Board Games', icon: '🎲' },
  { value: Category.VIDEO_GAMES, label: 'Video Games', icon: '🎮' },
  { value: Category.ACTIVITIES, label: 'Activities', icon: '🎯' },
];

const dietaryOptions = [
  'Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Gluten-free',
  'Dairy-free', 'Nut-free', 'Pescatarian',
];

const genreOptions = [
  'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance',
  'Thriller', 'Documentary', 'Animation', 'Fantasy', 'Crime', 'Musical',
];

/**
 * Multi-step onboarding form with category selection, dietary preferences,
 * location, and genre selection.
 */
export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [postcode, setPostcode] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const totalSteps = 4;

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) =>
      prev.includes(option)
        ? prev.filter((d) => d !== option)
        : [...prev, option]
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleNext = () => {
    if (step === 3 && postcode && !validateUKPostcode(postcode)) {
      setPostcodeError('Please enter a valid UK postcode');
      return;
    }
    setPostcodeError('');
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      window.location.href = '/dashboard';
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSkip = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-soft-cream dark:bg-[#0f0f23] flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold font-display bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
          Settled
        </span>
        <button
          onClick={handleSkip}
          className="text-sm text-gray-500 hover:text-coral transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-coral to-purple rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pb-8">
        <div className="max-w-md mx-auto">
          {/* Step 1: Category Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">What do you enjoy deciding on?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Select the categories you&apos;re most interested in.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {categoryOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleCategory(option.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedCategories.includes(option.value)
                        ? 'border-coral bg-coral/5 shadow-md'
                        : 'border-gray-200 dark:border-gray-700 hover:border-coral/50'
                    }`}
                  >
                    <span className="text-2xl block mb-2">{option.icon}</span>
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Dietary Preferences */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Any dietary preferences?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                This helps us filter food options for your group.
              </p>
              <div className="flex flex-wrap gap-3">
                {dietaryOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleDietary(option)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                      selectedDietary.includes(option)
                        ? 'border-coral bg-coral/10 text-coral'
                        : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-coral/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedDietary.length > 0 && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    ✓ Selected: {selectedDietary.join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Location */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Where are you based?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Your postcode helps us find nearby restaurants and activities.
              </p>
              <Input
                label="UK Postcode"
                placeholder="e.g. SW1A 1AA"
                value={postcode}
                onChange={(e) => {
                  setPostcode(e.target.value.toUpperCase());
                  setPostcodeError('');
                }}
                error={postcodeError}
                helperText="Optional - you can add this later"
              />
            </div>
          )}

          {/* Step 4: Genre Selection */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Pick your favourite genres</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Help us recommend better content for you.
              </p>
              <div className="flex flex-wrap gap-3">
                {genreOptions.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                      selectedGenres.includes(genre)
                        ? 'border-purple bg-purple/10 text-purple'
                        : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-purple/50'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              {step === totalSteps ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
