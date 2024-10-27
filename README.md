# FrameVault

**FrameVault** is a full-stack SaaS application for desktop wallpapers. It provides users with seamless access to an extensive library of images through a subscription model. Leveraging a modern tech stack including **Stripe**, **Next.js**, **Supabase**, and **DaisyUI**, FrameVault offers a comprehensive solution for managing subscriptions, tracking usage, and handling billing with ease.

## Tech Stack

- **Stripe**: Payment processing and subscription management.
- **Next.js**: React framework for building the user interface.
- **Supabase**: Backend services and database management.
- **DaisyUI**: Styling library for responsive and customizable UI components.

## Features

- **Subscription Management**: Users can subscribe to monthly plans for image access.
- **Payment Processing**: Secure transactions with Stripe.
- **Usage Metering**: Track user activity and bill based on usage.
- **Automated Billing**: Seamlessly handle invoicing and billing.

## Getting Started
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

Create the required Supabase tables using the integrated SQL editor:
```bash
create table
  public.stripe_customers (
    id uuid not null default uuid_generate_v4 (),
    user_id uuid not null,
    stripe_customer_id text not null,
    total_downloads integer null default 0,
    plan_active boolean not null default false,
    plan_expires bigint null,
    subscription_id text null,
    constraint stripe_customers_pkey primary key (id),
    constraint stripe_customers_stripe_customer_id_key unique (stripe_customer_id),
    constraint stripe_customers_user_id_fkey foreign key (user_id) references auth.users (id)
  ) tablespace pg_default;

create table
  public.downloads (
    id uuid not null default uuid_generate_v4 (),
    user_id uuid not null,
    ts timestamp without time zone null default now(),
    image text null,
    constraint downloads_pkey primary key (id),
    constraint downloads_user_id_fkey foreign key (user_id) references auth.users (id)
  ) tablespace pg_default;
```

Enable Supabase Email auth by setting the "confirm email" option to false.

## Contact
For more information or inquiries, please contact me at abdirahmanxabokar@gmail.com.
