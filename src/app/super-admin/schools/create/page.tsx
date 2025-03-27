"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, X } from "lucide-react";
import Link from "next/link";

export default function CreateSchool() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "USA",
        zipCode: "",
        phoneNumber: "",
        email: "",
        contactPerson: "",
        subscription: "standard",
        isActive: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Handle checkbox fields
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // In a real application, this would be an API call to create the school
            console.log("Submitting school data:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect back to schools list
            router.push("/super-admin/schools");
            router.refresh();
        } catch (error) {
            console.error("Error creating school:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/super-admin/schools"
                        className="rounded-full p-2 hover:bg-accent"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-2xl font-bold text-foreground">Add New School</h1>
                </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b border-border pb-2">School Information</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="name">
                                    School Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter school name"
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
                                    placeholder="school@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="(123) 456-7890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="contactPerson">
                                    Contact Person <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="contactPerson"
                                    name="contactPerson"
                                    type="text"
                                    required
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Principal or admin name"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4 pt-4">
                        <h2 className="text-xl font-semibold border-b border-border pb-2">Address Information</h2>

                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="address">
                                Street Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="123 School Street"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="city">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="City"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="state">
                                    State <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="State"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="zipCode">
                                    Zip Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    required
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Zip Code"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="country">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="USA">United States</option>
                                    <option value="CAN">Canada</option>
                                    <option value="MEX">Mexico</option>
                                    <option value="GBR">United Kingdom</option>
                                    <option value="AUS">Australia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Subscription & Status */}
                    <div className="space-y-4 pt-4">
                        <h2 className="text-xl font-semibold border-b border-border pb-2">Subscription & Status</h2>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="subscription">
                                    Subscription Plan <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="subscription"
                                    name="subscription"
                                    required
                                    value={formData.subscription}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="basic">Basic Plan</option>
                                    <option value="standard">Standard Plan</option>
                                    <option value="premium">Premium Plan</option>
                                    <option value="enterprise">Enterprise Plan</option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="isActive"
                                    name="isActive"
                                    type="checkbox"
                                    checked={formData.isActive}
                                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor="isActive" className="text-sm font-medium">
                                    Active School
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end space-x-4 pt-4 border-t border-border">
                        <Link
                            href="/super-admin/schools"
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
                            {isSubmitting ? "Saving..." : "Save School"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 