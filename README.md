# Arrivo - School Bus Arrival Notification System

Arrivo is a comprehensive school bus arrival notification system that helps schools manage their transportation services efficiently and keeps parents informed about their children's bus status.

## Features

- **Super Admin Portal**: Manage schools, subscriptions, users, and system-wide settings
- **School Admin Portal**: Manage drivers, staff, routes, and school-specific settings
- **Driver Management**: Track and manage school bus drivers
- **Route Planning**: Create and manage bus routes with multiple stops
- **Notifications**: Send real-time notifications to parents about bus arrivals and delays
- **Subscription Management**: Tiered subscription plans for schools

## Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe
- **Database**: MongoDB

## Prerequisites

- Node.js 18.x or higher
- MongoDB database
- Stripe account for payment processing

## Getting Started

### Environment Setup

1. Clone the repository
2. Copy `.env.local.example` to `.env.local` and fill in your environment variables:
   - MongoDB connection string
   - NextAuth secret
   - Stripe API keys

```bash
cp .env.local.example .env.local
```

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see the application running.

### Seeding the Database

To populate the database with initial data:

```
GET /api/seed
```

This will create:
- Sample subscription plans
- Super admin user
- Sample school
- School admin and staff users
- Sample drivers and routes

### Default Login Credentials

After seeding the database, you can log in with these credentials:

**Super Admin**:
- Email: admin@arrivo.com
- Password: admin123

**School Admin**:
- Email: schooladmin@lincolnhigh.edu
- Password: school123

**Staff**:
- Email: staff@lincolnhigh.edu
- Password: staff123

**Driver**:
- Email: john.driver@lincolnhigh.edu
- Password: driver123

## Available Routes

- `/auth/login` - Login page
- `/super-admin/dashboard` - Super admin dashboard
- `/school-admin/dashboard` - School admin dashboard
- `/api/seed` - Seed the database with initial data

## Future Enhancements

- Mobile app for parents to track bus location
- Real-time GPS tracking integration
- Automated notifications based on geofencing
- Advanced analytics and reporting
- Parent portal for managing notification preferences

## License

MIT
