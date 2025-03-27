"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, X } from "lucide-react";
import Link from "next/link";

interface School {
    id: string;
    name: string;
}

type UserRole = "super-admin" | "school-admin" | "staff" | "driver";

export default function CreateUser() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [schools, setSchools] = useState<School[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "staff" as UserRole,
        school: "",
        phoneNumber: "",
        isActive: true,
    });
    const [errors, setErrors] = useState({
        password: "",
        confirmPassword: "",
    });

    // Mock function to fetch schools
    useEffect(() => {
        // In a real application, this would be an API call
        const fetchSchools = async () => {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));

            // Mock data
            setSchools([
                { id: "1", name: "Lincoln High School" },
                { id: "2", name: "Washington Elementary" },
                { id: "3", name: "Riverside High School" },
                { id: "4", name: "St. Mary's Academy" },
                { id: "5", name: "Tech Preparatory School" },
            ]);
        };

        fetchSchools();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        // Handle checkbox fields
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
        } else if (name === 'role') {
            // Cast role value to UserRole type
            setFormData({ ...formData, role: value as UserRole });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Clear errors when user types
        if (name === 'password' || name === 'confirmPassword') {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { password: "", confirmPassword: "" };

        // Password validation
        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }

        // Password confirmation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // In a real application, this would be an API call to create the user
            console.log("Submitting user data:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect back to users list
            router.push("/super-admin/users");
            router.refresh();
        } catch (error) {
            console.error("Error creating user:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Check if school selection is needed
    const needsSchool = formData.role !== 'super-admin';

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/super-admin/users"
                        className="rounded-full p-2 hover:bg-accent"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-foreground">Add New User</h1>
                </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b border-border pb-2">User Information</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="name">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="email">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="user@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="(123) 456-7890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="role">
                                    Role <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="super-admin">Super Admin</option>
                                    <option value="school-admin">School Admin</option>
                                    <option value="staff">Staff</option>
                                    <option value="driver">Driver</option>
                                </select>
                            </div>

                            {needsSchool && (
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="school">
                                        School <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="school"
                                        name="school"
                                        required={needsSchool}
                                        value={formData.school}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Select a school</option>
                                        {schools.map((school) => (
                                            <option key={school.id} value={school.id}>
                                                {school.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="flex items-center space-x-2 mt-6">
                                <input
                                    id="isActive"
                                    name="isActive"
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor="isActive" className="text-sm font-medium">
                                    Active User
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-4 pt-4">
                        <h2 className="text-xl font-semibold border-b border-border pb-2">Password</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="password">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-input'} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                                    placeholder="Enter password"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
                                    Confirm Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-input'} bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary`}
                                    placeholder="Confirm password"
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            Password must be at least 6 characters long and contain a mix of letters, numbers, and special characters.
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-4 pt-4 border-t border-border">
                        <Link
                            href="/super-admin/users"
                            className="flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
                        >
                            <X className="mr-2 h-4 w-4" />
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Save className="mr-2 h-4 w-4" />
                            {isSubmitting ? "Saving..." : "Save User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 