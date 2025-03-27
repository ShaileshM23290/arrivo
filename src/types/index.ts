import { Document, Types } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
  role: 'super-admin' | 'school-admin' | 'staff' | 'driver';
  profileImage?: string;
  phoneNumber?: string;
  school?: Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface SchoolDocument extends Document {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  contactPerson: string;
  logo?: string;
  isActive: boolean;
  subscription: {
    plan: Types.ObjectId;
    status: 'active' | 'inactive' | 'canceled' | 'past_due';
    startDate: Date;
    endDate: Date;
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface DriverDocument extends Document {
  user: Types.ObjectId;
  school: Types.ObjectId;
  licenseNumber: string;
  licenseExpiry: Date;
  vehicleDetails: {
    model: string;
    registrationNumber: string;
    capacity: number;
    type: 'bus' | 'van' | 'other';
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RouteDocument extends Document {
  name: string;
  school: Types.ObjectId;
  driver: Types.ObjectId;
  stops: Array<{
    name: string;
    address: string;
    time: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  }>;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubscriptionPlanDocument extends Document {
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  duration: number; // in months
  stripeProductId?: string;
  stripePriceId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NotificationDocument extends Document {
  type: 'arrival' | 'delay' | 'emergency' | 'system';
  title: string;
  message: string;
  sender: Types.ObjectId;
  recipients: Types.ObjectId[];
  route?: Types.ObjectId;
  school: Types.ObjectId;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
