"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
    ChevronDown,
    BarChart3,
    Users,
    Bus,
    MapPin,
    Bell,
    LogOut,
    Menu,
    X,
    Settings,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function SchoolAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navItems = [
        {
            name: "Dashboard",
            href: "/school-admin/dashboard",
            icon: <BarChart3 className="h-5 w-5" />,
        },
        {
            name: "Staff",
            href: "/school-admin/staff",
            icon: <Users className="h-5 w-5" />,
        },
        {
            name: "Drivers",
            href: "/school-admin/drivers",
            icon: <Bus className="h-5 w-5" />,
        },
        {
            name: "Routes",
            href: "/school-admin/routes",
            icon: <MapPin className="h-5 w-5" />,
        },
        {
            name: "Settings",
            href: "/school-admin/settings",
            icon: <Settings className="h-5 w-5" />,
        },
    ];

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar for desktop */}
            <div
                className={`${isSidebarOpen ? "w-64" : "w-20"
                    } hidden md:block bg-card border-r border-border shadow-md transition-all duration-300 ease-in-out`}
            >
                <div className="flex h-20 items-center justify-between px-4">
                    <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                        <h1 className="text-xl font-bold text-green-600">School Portal</h1>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="rounded-md p-2 text-muted-foreground hover:bg-accent"
                    >
                        <ChevronDown
                            className={`h-5 w-5 transform transition-transform ${isSidebarOpen ? "rotate-0" : "-rotate-90"
                                }`}
                        />
                    </button>
                </div>

                <nav className="mt-5 px-4">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center rounded-md px-4 py-3 text-sm font-medium ${pathname?.startsWith(item.href)
                                    ? "bg-green-900/20 text-green-600"
                                    : "text-foreground hover:bg-accent"
                                    }`}
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMobileMenu}
            />

            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border shadow-lg transform transition-transform md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex h-20 items-center justify-between px-4">
                    <h1 className="text-xl font-bold text-green-600">School Portal</h1>
                    <button
                        onClick={toggleMobileMenu}
                        className="rounded-md p-2 text-muted-foreground hover:bg-accent"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="mt-5 px-4">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center rounded-md px-4 py-3 text-sm font-medium ${pathname?.startsWith(item.href)
                                    ? "bg-green-900/20 text-green-600"
                                    : "text-foreground hover:bg-accent"
                                    }`}
                                onClick={toggleMobileMenu}
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top navbar */}
                <header className="bg-card border-b border-border shadow-sm">
                    <div className="flex h-16 items-center justify-between px-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <div className="flex items-center space-x-4">
                            <ThemeToggle />

                            <button className="relative rounded-md p-2 text-muted-foreground hover:bg-accent">
                                <Bell className="h-5 w-5" />
                                <span className="absolute right-1 top-1 flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                </span>
                            </button>

                            <div className="relative">
                                <div className="flex items-center space-x-3">
                                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        {session?.user?.name?.[0] || "S"}
                                    </div>
                                    <div className="hidden text-sm md:block">
                                        <p className="font-medium text-foreground">
                                            {session?.user?.name || "School Admin"}
                                        </p>
                                        <p className="text-muted-foreground text-xs">School Administrator</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => signOut()}
                                className="rounded-md p-2 text-muted-foreground hover:bg-accent"
                                title="Sign out"
                            >
                                <LogOut className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-4">{children}</main>
            </div>
        </div>
    );
} 