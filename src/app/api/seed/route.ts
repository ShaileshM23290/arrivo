import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import School from '@/models/School';
import SubscriptionPlan from '@/models/SubscriptionPlan';
import Driver from '@/models/Driver';
import Route from '@/models/Route';

export async function GET() {
  try {
    await dbConnect();

    // Check if data already exists
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      return NextResponse.json({
        message: 'Database already seeded',
        success: false,
      });
    }

    // Create subscription plans
    const plans = await SubscriptionPlan.create([
      {
        name: 'Basic',
        description: 'Basic plan for small schools',
        price: 49.99,
        currency: 'USD',
        features: [
          'Up to 5 drivers',
          'Up to 10 routes',
          'Email notifications',
          'Basic support',
        ],
        duration: 1, // monthly
        isActive: true,
      },
      {
        name: 'Standard',
        description: 'Standard plan for medium-sized schools',
        price: 99.99,
        currency: 'USD',
        features: [
          'Up to 15 drivers',
          'Up to 30 routes',
          'Email and SMS notifications',
          'Priority support',
          'Route analytics',
        ],
        duration: 1, // monthly
        isActive: true,
      },
      {
        name: 'Premium',
        description: 'Premium plan for large schools',
        price: 199.99,
        currency: 'USD',
        features: [
          'Unlimited drivers',
          'Unlimited routes',
          'Email, SMS, and push notifications',
          '24/7 support',
          'Advanced analytics',
          'Custom branding',
        ],
        duration: 1, // monthly
        isActive: true,
      },
    ]);

    // Create super admin
    const superAdminPassword = await bcrypt.hash('admin123', 10);
    const superAdmin = await User.create({
      name: 'Super Admin',
      email: 'admin@arrivo.com',
      password: superAdminPassword,
      role: 'super-admin',
      isActive: true,
    });

    // Create a sample school
    const school = await School.create({
      name: 'Lincoln High School',
      address: '123 Education Street',
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
      zipCode: '62701',
      phoneNumber: '555-123-4567',
      email: 'info@lincolnhigh.edu',
      contactPerson: 'John Principal',
      isActive: true,
      subscription: {
        plan: plans[1]._id, // Standard plan
        status: 'active',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
    });

    // Create school admin
    const schoolAdminPassword = await bcrypt.hash('school123', 10);
    const schoolAdmin = await User.create({
      name: 'School Admin',
      email: 'schooladmin@lincolnhigh.edu',
      password: schoolAdminPassword,
      role: 'school-admin',
      school: school._id,
      isActive: true,
    });

    // Create staff
    const staffPassword = await bcrypt.hash('staff123', 10);
    const staff = await User.create({
      name: 'Staff Member',
      email: 'staff@lincolnhigh.edu',
      password: staffPassword,
      role: 'staff',
      school: school._id,
      isActive: true,
    });

    // Create driver users
    const driverPassword = await bcrypt.hash('driver123', 10);
    const driverUser1 = await User.create({
      name: 'John Driver',
      email: 'john.driver@lincolnhigh.edu',
      password: driverPassword,
      role: 'driver',
      school: school._id,
      isActive: true,
    });

    const driverUser2 = await User.create({
      name: 'Alice Driver',
      email: 'alice.driver@lincolnhigh.edu',
      password: driverPassword,
      role: 'driver',
      school: school._id,
      isActive: true,
    });

    // Create drivers
    const driver1 = await Driver.create({
      user: driverUser1._id,
      school: school._id,
      licenseNumber: 'DL12345678',
      licenseExpiry: new Date('2025-12-31'),
      vehicleDetails: {
        model: 'Blue Bird Vision',
        registrationNumber: 'BUS-001',
        capacity: 45,
        type: 'bus',
      },
      isActive: true,
    });

    await Driver.create({
      user: driverUser2._id,
      school: school._id,
      licenseNumber: 'DL87654321',
      licenseExpiry: new Date('2025-10-15'),
      vehicleDetails: {
        model: 'Thomas Saf-T-Liner',
        registrationNumber: 'BUS-002',
        capacity: 40,
        type: 'bus',
      },
      isActive: true,
    });

    // Create routes
    const route1 = await Route.create({
      name: 'Morning Route A',
      school: school._id,
      driver: driver1._id,
      stops: [
        {
          name: 'Oak Street',
          address: '123 Oak Street, Springfield, IL',
          time: '7:30 AM',
          coordinates: {
            lat: 39.781261,
            lng: -89.650138,
          },
        },
        {
          name: 'Maple Avenue',
          address: '456 Maple Avenue, Springfield, IL',
          time: '7:45 AM',
          coordinates: {
            lat: 39.778694,
            lng: -89.639785,
          },
        },
        {
          name: 'Pine Road',
          address: '789 Pine Road, Springfield, IL',
          time: '8:00 AM',
          coordinates: {
            lat: 39.774618,
            lng: -89.642424,
          },
        },
      ],
      isActive: true,
    });

    const route2 = await Route.create({
      name: 'Afternoon Route A',
      school: school._id,
      driver: driver1._id,
      stops: [
        {
          name: 'Pine Road',
          address: '789 Pine Road, Springfield, IL',
          time: '3:30 PM',
          coordinates: {
            lat: 39.774618,
            lng: -89.642424,
          },
        },
        {
          name: 'Maple Avenue',
          address: '456 Maple Avenue, Springfield, IL',
          time: '3:45 PM',
          coordinates: {
            lat: 39.778694,
            lng: -89.639785,
          },
        },
        {
          name: 'Oak Street',
          address: '123 Oak Street, Springfield, IL',
          time: '4:00 PM',
          coordinates: {
            lat: 39.781261,
            lng: -89.650138,
          },
        },
      ],
      isActive: true,
    });

    return NextResponse.json({
      message: 'Database seeded successfully',
      success: true,
      data: {
        plans: plans.map((p) => p.name),
        superAdmin: superAdmin.email,
        school: school.name,
        schoolAdmin: schoolAdmin.email,
        staff: staff.email,
        drivers: [driverUser1.email, driverUser2.email],
        routes: [route1.name, route2.name],
      },
    });
  } catch (error: unknown) {
    console.error('Seed error:', error);
    return NextResponse.json(
      {
        message: `Failed to seed database: ${
          error instanceof Error ? error.message : String(error)
        }`,
        success: false,
      },
      { status: 500 }
    );
  }
}
