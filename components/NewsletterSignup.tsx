'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  email: string;
  name: string;
}

interface ValidationErrors {
  email?: string;
  name?: string;
}

export default function NewsletterSignup() {
  const [formData, setFormData] = useState<FormState>({ email: '', name: '' });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Successfully subscribed to our newsletter!');
        setFormData({ email: '', name: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  return (
    <section 
      className="py-20 px-4"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-8">
            <h2 
              id="newsletter-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Join Our Exclusive Community
            </h2>
            <p className="text-white/90 text-lg">
              Subscribe to receive early access to new collections, special offers, and fragrance tips
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-white font-medium mb-2 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 ${
                    errors.name ? 'ring-2 ring-red-300' : ''
                  }`}
                  placeholder="Your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p 
                    id="name-error" 
                    className="mt-2 text-sm text-red-100 flex items-center"
                    role="alert"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-white font-medium mb-2 text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 ${
                    errors.email ? 'ring-2 ring-red-300' : ''
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p 
                    id="email-error" 
                    className="mt-2 text-sm text-red-100 flex items-center"
                    role="alert"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-purple-600 font-bold py-4 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </div>

            {submitStatus !== 'idle' && (
              <div 
                className={`mt-6 p-4 rounded-xl ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 border-2 border-green-300' 
                    : 'bg-red-500/20 border-2 border-red-300'
                }`}
                role="alert"
                aria-live="polite"
              >
                <p className={`text-center font-medium flex items-center justify-center ${
                  submitStatus === 'success' ? 'text-white' : 'text-red-100'
                }`}>
                  {submitStatus === 'success' ? (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  {statusMessage}
                </p>
              </div>
            )}
          </form>

          <p className="text-center text-white/75 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
