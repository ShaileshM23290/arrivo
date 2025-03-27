"use client";

import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, Pencil, Trash, UserCheck, UserX } from "lucide-react";
import Link from "next/link";

interface User {
    id: string;
    name: string;
    email: string;
    role: "super-admin" | "school-admin" | "staff" | "driver";
    school: string;
    lastActive: string;
    isActive: boolean;
}

export default function Users() {
    // Mock data - in a real app, this would come from an API
    const [users, setUsers] = useState<User[]>([
        {
            id: "1",
            name: "John Principal",
            email: "john@lincolnhigh.edu",
            role: "school-admin",
            school: "Lincoln High School",
            lastActive: "2023-07-15",
            isActive: true,
        },
        {
            id: "2",
            name: "Sarah Admin",
            email: "sarah@arrivo.com",
            role: "super-admin",
            school: "",
            lastActive: "2023-07-16",
            isActive: true,
        },
        {
            id: "3",
            name: "Martha Washington",
            email: "martha@washingtonelem.edu",
            role: "school-admin",
            school: "Washington Elementary",
            lastActive: "2023-07-14",
            isActive: true,
        },
        {
            id: "4",
            name: "James Driver",
            email: "james@lincolnhigh.edu",
            role: "driver",
            school: "Lincoln High School",
            lastActive: "2023-07-15",
            isActive: true,
        },
        {
            id: "5",
            name: "Lisa Staff",
            email: "lisa@riversidehigh.edu",
            role: "staff",
            school: "Riverside High School",
            lastActive: "2023-07-13",
            isActive: true,
        },
        {
            id: "6",
            name: "Bob Driver",
            email: "bob@stmarys.edu",
            role: "driver",
            school: "St. Mary's Academy",
            lastActive: "2023-07-10",
            isActive: false,
        },
        {
            id: "7",
            name: "Emily Staff",
            email: "emily@washingtonelem.edu",
            role: "staff",
            school: "Washington Elementary",
            lastActive: "2023-07-12",
            isActive: true,
        },
        {
            id: "8",
            name: "David Admin",
            email: "david@techprep.edu",
            role: "school-admin",
            school: "Tech Preparatory School",
            lastActive: "2023-07-11",
            isActive: true,
        },
    ]);

    // Search state
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState<string>("all");
    const [statusFilter, setStatusFilter] = useState<string>("all");

    // Filtered users based on search and filters
    const filteredUsers = users.filter(
        (user) => {
            // Search filter
            const matchesSearch =
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.school.toLowerCase().includes(searchTerm.toLowerCase());

            // Role filter
            const matchesRole =
                roleFilter === "all" || user.role === roleFilter;

            // Status filter
            const matchesStatus =
                statusFilter === "all" ||
                (statusFilter === "active" && user.isActive) ||
                (statusFilter === "inactive" && !user.isActive);

            return matchesSearch && matchesRole && matchesStatus;
        }
    );

    // Role colors
    const getRoleColor = (role: string) => {
        switch (role) {
            case "super-admin":
                return "bg-purple-500/20 text-purple-500";
            case "school-admin":
                return "bg-blue-500/20 text-blue-500";
            case "staff":
                return "bg-green-500/20 text-green-500";
            case "driver":
                return "bg-yellow-500/20 text-yellow-500";
            default:
                return "bg-gray-500/20 text-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Users</h1>
                <Link
                    href="/super-admin/users/create"
                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                </Link>
            </div>

            <div className="bg-card rounded-md border border-border shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-border gap-4">
                    <div className="w-full md:max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full rounded-md border border-input pl-10 pr-4 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select
                            className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                        >
                            <option value="all">All Roles</option>
                            <option value="super-admin">Super Admin</option>
                            <option value="school-admin">School Admin</option>
                            <option value="staff">Staff</option>
                            <option value="driver">Driver</option>
                        </select>
                        <select
                            className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
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
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    School
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Last Active
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
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-muted/50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}
                                        >
                                            {user.role.replace('-', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {user.school || "-"}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                        {new Date(user.lastActive).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`flex items-center px-2 py-1 text-xs font-semibold rounded-full ${user.isActive
                                                    ? "bg-green-500/20 text-green-500"
                                                    : "bg-red-500/20 text-red-500"
                                                }`}
                                        >
                                            {user.isActive ? (
                                                <UserCheck className="mr-1 h-3 w-3" />
                                            ) : (
                                                <UserX className="mr-1 h-3 w-3" />
                                            )}
                                            {user.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                className="p-1 rounded-md hover:bg-accent"
                                                title="Edit User"
                                            >
                                                <Pencil className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                            <button
                                                className="p-1 rounded-md hover:bg-accent"
                                                title="Delete User"
                                            >
                                                <Trash className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                            <div className="relative group">
                                                <button className="p-1 rounded-md hover:bg-accent">
                                                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                                </button>
                                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-card border border-border hidden group-hover:block z-10">
                                                    <Link
                                                        href={`/super-admin/users/${user.id}`}
                                                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                                                    >
                                                        View Details
                                                    </Link>
                                                    <button className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left">
                                                        Reset Password
                                                    </button>
                                                    <button className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left">
                                                        {user.isActive ? "Deactivate User" : "Activate User"}
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
                        Showing <span className="font-medium">{filteredUsers.length}</span> of{" "}
                        <span className="font-medium">{users.length}</span> users
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
            </div>
        </div>
    );
} 