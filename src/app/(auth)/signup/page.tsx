'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

/**
 * Registration page with display name, email, password, confirm password.
 * Includes GDPR-compliant terms & privacy checkbox.
 */
export default function SignupPage() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Mock signup - in production would use useAuth hook
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/onboarding';
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Create your account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Display name"
          type="text"
          placeholder="Alex"
          value={formData.displayName}
          onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
          error={errors.displayName}
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          helperText="Must be at least 8 characters"
          required
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          required
        />

        <div className="space-y-2">
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 rounded border-gray-300"
            />
            <span className="text-gray-600 dark:text-gray-400">
              I agree to the{' '}
              <Link href="/terms" className="text-coral hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-coral hover:underline">
                Privacy Policy
              </Link>
              . I understand my data will be processed in accordance with GDPR.
            </span>
          </label>
          {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}
        </div>

        <Button type="submit" variant="primary" className="w-full" loading={loading}>
          Create account
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-coral hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </div>
  );
}
