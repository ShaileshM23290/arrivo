"use client";

import { useEffect, useState } from "react";
import { School, Users, CreditCard, TrendingUp } from "lucide-react";

interface DashboardStats {
    totalSchools: number;
    activeSchools: number;
    totalUsers: number;
    activeSubscriptions: number;
    revenue: number;
}

export default function SuperAdminDashboard() {
    // In a real application, this would be fetched from an API
    const [stats, setStats] = useState<DashboardStats>({
        totalSchools: 0,
        activeSchools: 0,
        totalUsers: 0,
        activeSubscriptions: 0,
        revenue: 0,
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const timer = setTimeout(() => {
            setStats({
                totalSchools: 24,
                activeSchools: 18,
                totalUsers: 156,
                activeSubscriptions: 18,
                revenue: 12480,
            });
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const statCards = [
        {
            title: "Total Schools",
            value: stats.totalSchools,
            icon: <School className="h-6 w-6 text-blue-500" />,
            change: "+12% from last month",
            isPositive: true,
        },
        {
            title: "Active Schools",
            value: stats.activeSchools,
            icon: <School className="h-6 w-6 text-green-500" />,
            change: "+5% from last month",
            isPositive: true,
        },
        {
            title: "Total Users",
            value: stats.totalUsers,
            icon: <Users className="h-6 w-6 text-indigo-500" />,
            change: "+18% from last month",
            isPositive: true,
        },
        {
            title: "Active Subscriptions",
            value: stats.activeSubscriptions,
            icon: <CreditCard className="h-6 w-6 text-purple-500" />,
            change: "+3% from last month",
            isPositive: true,
        },
        {
            title: "Monthly Revenue",
            value: `$${stats.revenue.toLocaleString()}`,
            icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
            change: "+7% from last month",
            isPositive: true,
        },
    ];

    // Sample data for recent activities
    const recentActivities = [
        {
            id: 1,
            action: "New school registered",
            school: "Greenwood Elementary",
            time: "2 hours ago",
        },
        {
            id: 2,
            action: "Subscription upgraded",
            school: "Riverside High School",
            time: "5 hours ago",
        },
        {
            id: 3,
            action: "New driver added",
            school: "St. Mary's Academy",
            time: "1 day ago",
        },
        {
            id: 4,
            action: "Payment processed",
            school: "Lincoln Middle School",
            time: "1 day ago",
        },
        {
            id: 5,
            action: "Route modified",
            school: "Washington Elementary",
            time: "2 days ago",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <div className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-lg bg-gray-900 p-6 shadow animate-pulse border border-border"
                        >
                            <div className="h-10 w-10 rounded-full bg-muted"></div>
                            <div className="mt-4 h-4 w-1/2 rounded bg-muted"></div>
                            <div className="mt-2 h-6 w-1/3 rounded bg-muted"></div>
                            <div className="mt-2 h-3 w-3/4 rounded bg-muted"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {statCards.map((card, index) => (
                        <div key={index} className="rounded-lg bg-gray-900 p-6 shadow border border-border">
                            <div className="flex items-center justify-between">
                                <div className="rounded-full bg-accent p-2">{card.icon}</div>
                            </div>
                            <div className="mt-4 text-sm font-medium text-muted-foreground">
                                {card.title}
                            </div>
                            <div className="mt-2 text-3xl font-semibold">{card.value}</div>
                            <div
                                className={`mt-2 text-xs ${card.isPositive ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {card.change}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-lg bg-gray-900 p-6 shadow border border-border">
                    <h2 className="mb-4 text-lg font-semibold text-foreground">
                        Recent Activities
                    </h2>
                    <div className="divide-y divide-border">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="py-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">{activity.action}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {activity.school}
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="text-sm font-medium text-primary hover:text-primary/80">
                            View All Activities
                        </button>
                    </div>
                </div>

                <div className="rounded-lg bg-gray-900 p-6 shadow border border-border">
                    <h2 className="mb-4 text-lg font-semibold text-foreground">
                        Subscription Overview
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Basic Plan
                                </span>
                                <span className="text-sm font-medium">8 schools</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-blue-500"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Standard Plan
                                </span>
                                <span className="text-sm font-medium">6 schools</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-green-500"
                                    style={{ width: "30%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Premium Plan
                                </span>
                                <span className="text-sm font-medium">4 schools</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-purple-500"
                                    style={{ width: "20%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Enterprise Plan
                                </span>
                                <span className="text-sm font-medium">2 schools</span>
                            </div>
                            <div className="mt-2 h-2 w-full rounded-full bg-muted">
                                <div
                                    className="h-2 rounded-full bg-yellow-500"
                                    style={{ width: "10%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="text-sm font-medium text-primary hover:text-primary/80">
                            View Subscription Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 