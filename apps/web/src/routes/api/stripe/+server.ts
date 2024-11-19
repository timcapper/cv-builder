import { STRIPE_SECRET_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({ request, url }) => {
  const formData = await request.formData();
  const priceId = formData.get('priceId');

  if (!priceId) {
    throw new Error('No price ID provided');
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId as string,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${url.origin}/settings/credits`,
    cancel_url: `${url.origin}/`,
  });

  if (!session.url) throw new Error('Stripe session URL was not returned');
  throw redirect(303, session.url);
};