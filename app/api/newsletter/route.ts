import { NextRequest, NextResponse } from 'next/server';

interface NewsletterSubscription {
  email: string;
  name: string;
  timestamp?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterSubscription = await request.json();
    const { email, name } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const subscription: NewsletterSubscription = {
      email: email.trim().toLowerCase(),
      name: name.trim(),
      timestamp: new Date().toISOString(),
    };

    console.log('Newsletter subscription received:', subscription);

    await mockNewsletterService(subscription);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to our newsletter!',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your subscription. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}

async function mockNewsletterService(subscription: NewsletterSubscription): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      
      if (random > 0.95) {
        reject(new Error('Service temporarily unavailable'));
      } else {
        console.log(`Mock service: Subscription processed for ${subscription.email}`);
        resolve();
      }
    }, 500);
  });
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Newsletter API endpoint',
      methods: ['POST'],
      version: '1.0.0'
    },
    { status: 200 }
  );
}
