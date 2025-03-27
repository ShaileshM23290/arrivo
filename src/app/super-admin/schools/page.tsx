"use client";

import { useState } from "react";
import { Search, Plus, MoreHorizontal, Pencil, Trash, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

interface School {
    id: string;
    name: string;
    location: string;
    admin: string;
    email: string;
    students: number;
    subscription: string;
    status: 'active' | 'inactive';
}

export default function Schools() {
    // Mock data - in a real app, this would come from an API
    const [schools, setSchools] = useState<School[]>([
        {
            id: "1",
            name: "Lincoln High School",
            location: "Springfield, IL",
            admin: "John Principal",
            email: "info@lincolnhigh.edu",
            students: 1200,
            subscription: "Standard",
            status: "active",
        },
        {
            id: "2",
            name: "Washington Elementary",
            location: "Washington, DC",
            admin: "Martha Washington",
            email: "info@washingtonelem.edu",
            students: 800,
            subscription: "Premium",
            status: "active",
        },
        {
            id: "3",
            name: "Riverside High School",
            location: "Riverside, CA",
            admin: "Robert Brown",
            email: "info@riversidehigh.edu",
            students: 1500,
            subscription: "Standard",
            status: "active",
        },
        {
            id: "4",
            name: "St. Mary's Academy",
            location: "Portland, OR",
            admin: "Sister Mary",
            email: "info@stmarys.edu",
            students: 650,
            subscription: "Basic",
            status: "active",
        },
        {
            id: "5",
            name: "Greenwood Elementary",
            location: "Seattle, WA",
            admin: "James Green",
            email: "info@greenwood.edu",
            students: 550,
            subscription: "Basic",
            status: "inactive",
        },
        {
            id: "6",
            name: "Tech Preparatory School",
            location: "San Francisco, CA",
            admin: "Lisa Chen",
            email: "info@techprep.edu",
            students: 900,
            subscription: "Premium",
            status: "active",
        },
        {
            id: "7",
            name: "Lakeside Middle School",
            location: "Chicago, IL",
            admin: "Michael Lake",
            email: "info@lakeside.edu",
            students: 720,
            subscription: "Standard",
            status: "inactive",
        },
    ]);

    // Search state
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered schools based on search
    const filteredSchools = schools.filter(
        (school) =>
            school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            school.admin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            school.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Schools</h1>
                <Link
                    href="/super-admin/schools/create"
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add School
                </Link>
            </div>

            <div className="bg-card rounded-md border border-border shadow-sm">
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search schools..."
                                className="w-full rounded-md border border-input pl-10 pr-4 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="all">All Schools</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <select className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="all">All Plans</option>
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
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
                                    Location
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Admin
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Students
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Subscription
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredSchools.map((school) => (
                                <tr key={school.id} className="hover:bg-muted/50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                                        {school.name}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {school.location}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {school.admin}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {school.email}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {school.students}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${school.subscription === "Premium"
                                                    ? "bg-purple-500/20 text-purple-500"
                                                    : school.subscription === "Standard"
                                                        ? "bg-blue-500/20 text-blue-500"
                                                        : "bg-gray-500/20 text-gray-400"
                                                }`}
                                        >
                                            {school.subscription}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`flex items-center px-2 py-1 text-xs font-semibold rounded-full ${school.status === "active"
                                                    ? "bg-green-500/20 text-green-500"
                                                    : "bg-red-500/20 text-red-500"
                                                }`}
                                        >
                                            {school.status === "active" ? (
                                                <CheckCircle className="mr-1 h-3 w-3" />
                                            ) : (
                                                <XCircle className="mr-1 h-3 w-3" />
                                            )}
                                            {school.status === "active" ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                className="p-1 rounded-md hover:bg-accent"
                                                title="Edit School"
                                            >
                                                <Pencil className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                            <button
                                                className="p-1 rounded-md hover:bg-accent"
                                                title="Delete School"
                                            >
                                                <Trash className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                            <div className="relative group">
                                                <button className="p-1 rounded-md hover:bg-accent">
                                                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                                </button>
                                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-card border border-border hidden group-hover:block z-10">
                                                    <Link
                                                        href={`/super-admin/schools/${school.id}`}
                                                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                                                    >
                                                        View Details
                                                    </Link>
                                                    <Link
                                                        href={`/super-admin/schools/${school.id}/users`}
                                                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                                                    >
                                                        Manage Users
                                                    </Link>
                                                    <Link
                                                        href={`/super-admin/schools/${school.id}/subscription`}
                                                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                                                    >
                                                        Manage Subscription
                                                    </Link>
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
                        Showing <span className="font-medium">{filteredSchools.length}</span> of{" "}
                        <span className="font-medium">{schools.length}</span> schools
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 rounded-md border border-border bg-card text-foreground text-sm hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <button className="px-3 py-1 rounded-md border border-border bg-primary text-primary-foreground text-sm hover:bg-primary/90">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-md border border-border bg-card text-foreground text-sm hover:bg-accent">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-md border border-border bg-card text-foreground text-sm hover:bg-accent">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 