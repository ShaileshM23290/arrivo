"use client";

import { useEffect, useState } from "react";
import { Bus, Users, MapPin, Clock, Bell } from "lucide-react";

interface DashboardStats {
    totalDrivers: number;
    totalStaff: number;
    totalRoutes: number;
    activeNotifications: number;
}

export default function SchoolAdminDashboard() {
    // In a real application, this would be fetched from an API
    const [stats, setStats] = useState<DashboardStats>({
        totalDrivers: 0,
        totalStaff: 0,
        totalRoutes: 0,
        activeNotifications: 0,
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const timer = setTimeout(() => {
            setStats({
                totalDrivers: 8,
                totalStaff: 12,
                totalRoutes: 6,
                activeNotifications: 3,
            });
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const statCards = [
        {
            title: "Total Drivers",
            value: stats.totalDrivers,
            icon: <Bus className="h-6 w-6 text-blue-500" />,
        },
        {
            title: "Total Staff",
            value: stats.totalStaff,
            icon: <Users className="h-6 w-6 text-green-500" />,
        },
        {
            title: "Total Routes",
            value: stats.totalRoutes,
            icon: <MapPin className="h-6 w-6 text-indigo-500" />,
        },
        {
            title: "Active Notifications",
            value: stats.activeNotifications,
            icon: <Bell className="h-6 w-6 text-red-500" />,
        },
    ];

    // Sample data for upcoming trips
    const upcomingTrips = [
        {
            id: 1,
            routeName: "Morning Route A",
            driver: "John Smith",
            time: "7:30 AM",
            status: "On Schedule",
        },
        {
            id: 2,
            routeName: "Morning Route B",
            driver: "Alice Johnson",
            time: "7:45 AM",
            status: "Delayed by 5 min",
        },
        {
            id: 3,
            routeName: "Morning Route C",
            driver: "Robert Davis",
            time: "8:00 AM",
            status: "On Schedule",
        },
        {
            id: 4,
            routeName: "Afternoon Route A",
            driver: "John Smith",
            time: "3:30 PM",
            status: "On Schedule",
        },
        {
            id: 5,
            routeName: "Afternoon Route B",
            driver: "Alice Johnson",
            time: "3:45 PM",
            status: "On Schedule",
        },
    ];

    // Sample data for recent notifications
    const recentNotifications = [
        {
            id: 1,
            title: "Driver Absence",
            message: "Driver Robert Davis reported sick leave for tomorrow.",
            time: "1 hour ago",
            isRead: false,
        },
        {
            id: 2,
            title: "Route Delay",
            message: "Morning Route B will be delayed by 5 minutes tomorrow due to road work.",
            time: "3 hours ago",
            isRead: false,
        },
        {
            id: 3,
            title: "New Parent Registered",
            message: "A new parent has registered for notifications on Route C.",
            time: "5 hours ago",
            isRead: false,
        },
        {
            id: 4,
            title: "Subscription Reminder",
            message: "Your subscription will renew in 7 days.",
            time: "1 day ago",
            isRead: true,
        },
        {
            id: 5,
            title: "System Maintenance",
            message: "The system will be under maintenance this weekend from 2 AM to 4 AM.",
            time: "2 days ago",
            isRead: true,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">School Dashboard</h1>
                <div className="text-sm text-gray-200">
                    {new Date().toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-lg bg-gray-900 p-6 shadow animate-pulse"
                        >
                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                            <div className="mt-4 h-4 w-1/2 rounded bg-gray-200"></div>
                            <div className="mt-2 h-6 w-1/3 rounded bg-gray-200"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((card, index) => (
                        <div key={index} className="rounded-lg bg-gray-900 p-6 shadow">
                            <div className="flex items-center justify-between">
                                <div className="rounded-full bg-gray-100 p-2">{card.icon}</div>
                            </div>
                            <div className="mt-4 text-sm font-medium text-gray-200">
                                {card.title}
                            </div>
                            <div className="mt-2 text-3xl font-semibold">{card.value}</div>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-lg bg-gray-900 p-6 shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-200">
                            Today&apos;s Trips
                        </h2>
                        <div className="flex items-center text-sm text-gray-200">
                            <Clock className="mr-1 h-4 w-4" />
                            Updated just now
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                    >
                                        Route
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                    >
                                        Driver
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                    >
                                        Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-900 divide-y divide-gray-200">
                                {upcomingTrips.map((trip) => (
                                    <tr key={trip.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                            {trip.routeName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                            {trip.driver}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                            {trip.time}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${trip.status === "On Schedule"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                                    }`}
                                            >
                                                {trip.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="text-sm font-medium text-green-600 hover:text-green-500">
                            View All Routes
                        </button>
                    </div>
                </div>

                <div className="rounded-lg bg-gray-900 p-6 shadow">
                    <h2 className="mb-4 text-lg font-semibold text-gray-200">
                        Recent Notifications
                    </h2>
                    <div className="space-y-4">
                        {recentNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`flex items-start p-3 rounded-md bg-gray-800"
                                    }`}
                            >
                                <div
                                    className={`flex-shrink-0 h-2 w-2 mt-1 rounded-full ${!notification.isRead ? "bg-green-400" : "bg-gray-600"
                                        }`}
                                ></div>
                                <div className="ml-3 flex-1">
                                    <div className="text-sm font-medium text-gray-200">
                                        {notification.title}
                                    </div>
                                    <div className="mt-1 text-sm text-gray-200">
                                        {notification.message}
                                    </div>
                                    <div className="mt-1 text-xs text-gray-400">
                                        {notification.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="text-sm font-medium text-green-600 hover:text-green-500">
                            View All Notifications
                        </button>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6 shadow">
                <h2 className="mb-4 text-lg font-semibold text-gray-200">
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <button className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-4 hover:bg-gray-800">
                        <Bus className="h-6 w-6 text-blue-500" />
                        <span className="mt-2 text-sm font-medium text-gray-200">
                            Add New Driver
                        </span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-4 hover:bg-gray-800">
                        <MapPin className="h-6 w-6 text-green-500" />
                        <span className="mt-2 text-sm font-medium text-gray-200">
                            Create New Route
                        </span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-4 hover:bg-gray-800">
                        <Bell className="h-6 w-6 text-indigo-500" />
                        <span className="mt-2 text-sm font-medium text-gray-200">
                            Send Notification
                        </span>
                    </button>
                    <button className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-4 hover:bg-gray-800">
                        <Users className="h-6 w-6 text-purple-500" />
                        <span className="mt-2 text-sm font-medium text-gray-200">
                            Manage Staff
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
} 