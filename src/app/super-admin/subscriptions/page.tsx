"use client";

import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, Pencil, CheckCircle, XCircle, Clock } from "lucide-react";
import Link from "next/link";

// Define types for our data
interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    billing: "monthly" | "yearly";
    features: string[];
    isActive: boolean;
}

interface SchoolSubscription {
    id: string;
    schoolId: string;
    schoolName: string;
    planId: string;
    planName: string;
    startDate: string;
    endDate: string;
    status: "active" | "expired" | "pending" | "canceled";
    price: number;
    lastPayment: string;
    nextPayment: string;
}

export default function Subscriptions() {
    // Mock data for subscription plans
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [plans, setPlans] = useState<SubscriptionPlan[]>([
        {
            id: "1",
            name: "Basic Plan",
            price: 99,
            billing: "monthly",
            features: ["Up to 5 drivers", "Basic reporting", "Email support"],
            isActive: true,
        },
        {
            id: "2",
            name: "Standard Plan",
            price: 199,
            billing: "monthly",
            features: ["Up to 15 drivers", "Advanced reporting", "Priority support", "Route optimization"],
            isActive: true,
        },
        {
            id: "3",
            name: "Premium Plan",
            price: 299,
            billing: "monthly",
            features: ["Unlimited drivers", "Real-time analytics", "24/7 support", "Advanced route optimization", "API access"],
            isActive: true,
        },
        {
            id: "4",
            name: "Basic Annual",
            price: 999,
            billing: "yearly",
            features: ["Up to 5 drivers", "Basic reporting", "Email support"],
            isActive: true,
        },
        {
            id: "5",
            name: "Standard Annual",
            price: 1999,
            billing: "yearly",
            features: ["Up to 15 drivers", "Advanced reporting", "Priority support", "Route optimization"],
            isActive: true,
        },
        {
            id: "6",
            name: "Premium Annual",
            price: 2999,
            billing: "yearly",
            features: ["Unlimited drivers", "Real-time analytics", "24/7 support", "Advanced route optimization", "API access"],
            isActive: true,
        },
    ]);

    // Mock data for school subscriptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [schoolSubscriptions, setSchoolSubscriptions] = useState<SchoolSubscription[]>([
        {
            id: "1",
            schoolId: "1",
            schoolName: "Lincoln High School",
            planId: "3",
            planName: "Premium Plan",
            startDate: "2023-01-15",
            endDate: "2024-01-15",
            status: "active",
            price: 299,
            lastPayment: "2023-07-15",
            nextPayment: "2023-08-15",
        },
        {
            id: "2",
            schoolId: "2",
            schoolName: "Washington Elementary",
            planId: "2",
            planName: "Standard Plan",
            startDate: "2023-03-10",
            endDate: "2024-03-10",
            status: "active",
            price: 199,
            lastPayment: "2023-07-10",
            nextPayment: "2023-08-10",
        },
        {
            id: "3",
            schoolId: "3",
            schoolName: "Riverside High School",
            planId: "4",
            planName: "Basic Annual",
            startDate: "2023-02-01",
            endDate: "2024-02-01",
            status: "active",
            price: 999,
            lastPayment: "2023-02-01",
            nextPayment: "2024-02-01",
        },
        {
            id: "4",
            schoolId: "4",
            schoolName: "St. Mary's Academy",
            planId: "5",
            planName: "Standard Annual",
            startDate: "2022-05-15",
            endDate: "2023-05-15",
            status: "expired",
            price: 1999,
            lastPayment: "2022-05-15",
            nextPayment: "",
        },
        {
            id: "5",
            schoolId: "5",
            schoolName: "Tech Preparatory School",
            planId: "1",
            planName: "Basic Plan",
            startDate: "2023-06-01",
            endDate: "2023-08-01",
            status: "canceled",
            price: 99,
            lastPayment: "2023-07-01",
            nextPayment: "",
        },
        {
            id: "6",
            schoolId: "6",
            schoolName: "Oakridge Academy",
            planId: "3",
            planName: "Premium Plan",
            startDate: "2023-08-01",
            endDate: "2024-08-01",
            status: "pending",
            price: 299,
            lastPayment: "",
            nextPayment: "2023-08-01",
        },
    ]);

    // Search and filter states
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [planFilter, setPlanFilter] = useState<string>("all");
    const [tab, setTab] = useState<"plans" | "subscriptions">("plans");

    // Filtered subscriptions based on search and filters
    const filteredSubscriptions = schoolSubscriptions.filter(
        (subscription) => {
            // Search filter
            const matchesSearch =
                subscription.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                subscription.planName.toLowerCase().includes(searchTerm.toLowerCase());

            // Status filter
            const matchesStatus =
                statusFilter === "all" || subscription.status === statusFilter;

            // Plan filter
            const matchesPlan =
                planFilter === "all" || subscription.planId === planFilter;

            return matchesSearch && matchesStatus && matchesPlan;
        }
    );

    // Status badge color
    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-500/20 text-green-500";
            case "expired":
                return "bg-red-500/20 text-red-500";
            case "pending":
                return "bg-yellow-500/20 text-yellow-500";
            case "canceled":
                return "bg-gray-500/20 text-gray-500";
            default:
                return "bg-gray-500/20 text-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Subscriptions</h1>
                <Link
                    href="/super-admin/subscriptions/create"
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    {tab === "plans" ? "Add Plan" : "Add Subscription"}
                </Link>
            </div>

            <div className="bg-card rounded-md border border-border shadow-sm">
                <div className="border-b border-border">
                    <div className="flex space-x-4 px-4">
                        <button
                            className={`py-3 px-1 font-medium text-sm border-b-2 ${tab === "plans"
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                                }`}
                            onClick={() => setTab("plans")}
                        >
                            Subscription Plans
                        </button>
                        <button
                            className={`py-3 px-1 font-medium text-sm border-b-2 ${tab === "subscriptions"
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                                }`}
                            onClick={() => setTab("subscriptions")}
                        >
                            School Subscriptions
                        </button>
                    </div>
                </div>

                {tab === "plans" ? (
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className="border border-border rounded-lg p-4 shadow-sm hover:border-primary transition-colors"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-foreground">{plan.name}</h3>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${plan.isActive ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                                        }`}>
                                        {plan.isActive ? "Active" : "Inactive"}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                                    <span className="text-muted-foreground">/{plan.billing}</span>
                                </div>
                                <ul className="mb-4 space-y-2">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex space-x-2 mt-4">
                                    <button className="flex-1 px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                                        Edit
                                    </button>
                                    <button className="px-3 py-2 text-sm font-medium rounded-md border border-border bg-card hover:bg-accent">
                                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-border gap-4">
                            <div className="w-full md:max-w-md">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Search schools or plans..."
                                        className="w-full rounded-md border border-input pl-10 pr-4 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <select
                                    className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="expired">Expired</option>
                                    <option value="pending">Pending</option>
                                    <option value="canceled">Canceled</option>
                                </select>
                                <select
                                    className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    value={planFilter}
                                    onChange={(e) => setPlanFilter(e.target.value)}
                                >
                                    <option value="all">All Plans</option>
                                    {plans.map(plan => (
                                        <option key={plan.id} value={plan.id}>{plan.name}</option>
                                    ))}
                                </select>
                                <button className="rounded-md border border-input bg-background p-2 hover:bg-accent">
                                    <Filter className="h-4 w-4 text-muted-foreground" />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border bg-muted/50">
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            School
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Plan
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Start Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            End Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Next Payment
                                        </th>
                                        <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {filteredSubscriptions.map((subscription) => (
                                        <tr key={subscription.id} className="hover:bg-muted/50">
                                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                                                <Link href={`/super-admin/schools/${subscription.schoolId}`} className="hover:text-primary">
                                                    {subscription.schoolName}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {subscription.planName}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscription.status)}`}
                                                >
                                                    {subscription.status === "active" && <CheckCircle className="mr-1 h-3 w-3" />}
                                                    {subscription.status === "expired" && <XCircle className="mr-1 h-3 w-3" />}
                                                    {subscription.status === "pending" && <Clock className="mr-1 h-3 w-3" />}
                                                    {subscription.status === "canceled" && <XCircle className="mr-1 h-3 w-3" />}
                                                    {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {new Date(subscription.startDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {new Date(subscription.endDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                ${subscription.price}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                                {subscription.nextPayment
                                                    ? new Date(subscription.nextPayment).toLocaleDateString()
                                                    : "-"}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <button
                                                        className="p-1 rounded-md hover:bg-accent"
                                                        title="Edit Subscription"
                                                    >
                                                        <Pencil className="h-4 w-4 text-muted-foreground" />
                                                    </button>
                                                    <div className="relative group">
                                                        <button className="p-1 rounded-md hover:bg-accent">
                                                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                                        </button>
                                                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-card border border-border hidden group-hover:block z-10">
                                                            <Link
                                                                href={`/super-admin/subscriptions/${subscription.id}`}
                                                                className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                                                            >
                                                                View Details
                                                            </Link>
                                                            <button className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left">
                                                                {subscription.status === "active" ? "Cancel Subscription" : "Reactivate Subscription"}
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left">
                                                                Change Plan
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left">
                                                                View Payment History
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                            <div className="text-sm text-muted-foreground">
                                Showing <span className="font-medium">{filteredSubscriptions.length}</span> of{" "}
                                <span className="font-medium">{schoolSubscriptions.length}</span> subscriptions
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 rounded-md border border-border bg-card text-foreground text-sm hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed">
                                    Previous
                                </button>
                                <button className="px-3 py-1 rounded-md border border-border bg-primary text-primary-foreground text-sm hover:bg-primary/90">
                                    1
                                </button>
                                <button className="px-3 py-1 rounded-md border border-border bg-card text-foreground text-sm hover:bg-accent">
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
} 