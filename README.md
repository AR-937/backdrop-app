## FrameVault

**FrameVault** is a full-stack SaaS application for stock photography subscriptions. It provides users with seamless access to an extensive library of images through a subscription model. Leveraging a modern tech stack including **Stripe**, **Next.js**, and **Supabase**, FrameVault offers a comprehensive solution for managing subscriptions, tracking usage, and handling billing with ease.

### Tech Stack

- **Stripe**: Payment processing and subscription management.
- **Next.js**: React framework for building the user interface.
- **Supabase**: Backend services and database management.

### Features

- **Subscription Management**: Users can subscribe to monthly plans for image access.
- **Payment Processing**: Secure transactions with Stripe.
- **Usage Metering**: Track user activity and bill based on usage.
- **Automated Billing**: Seamlessly handle invoicing and billing.

### Getting Started
To start the Next.js app, use the following command:
```bash
git clone <this-repo>
npm install
npm run dev
```

Create a .env file in the root directory and configure the following environment variables:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SECRET_KEY=
```

Install the Stripe CLI to handle webhooks and run it locally.
```bash
stripe listen -e customer.subscription.updated,customer.subscription.deleted,checkout.session.completed --forward-to http://localhost:3000/api/webhook
```


