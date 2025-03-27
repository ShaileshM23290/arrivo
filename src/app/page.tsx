import Link from "next/link";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 text-center">
      <div className="max-w-4xl space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-primary sm:text-6xl">
            Arrivo
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            School Bus Arrival Notification System
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-lg text-foreground">
            A comprehensive solution for schools to manage their transportation
            services and notify parents about school bus arrivals in real-time.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:-translate-y-1 border border-border">
              <div className="mb-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-card-foreground">Real-time Tracking</h2>
              <p className="text-muted-foreground">
                Know exactly when the school bus will arrive at your stop.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:-translate-y-1 border border-border">
              <div className="mb-4 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-card-foreground">
                Instant Notifications
              </h2>
              <p className="text-muted-foreground">
                Receive alerts about delays, route changes, and arrivals.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:-translate-y-1 border border-border">
              <div className="mb-4 text-purple-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-card-foreground">
                Efficient Management
              </h2>
              <p className="text-muted-foreground">
                Easily manage drivers, routes, and transportation operations.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get Started
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Access the admin portal to manage your school&apos;s transportation
            services.
          </p>
        </div>
      </div>
    </div>
  );
}
