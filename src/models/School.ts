import mongoose, { Schema } from 'mongoose';
import { SchoolDocument } from '@/types';

const SchoolSchema = new Schema<SchoolDocument>(
  {
    name: {
      type: String,
      required: [true, 'School name is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },
    zipCode: {
      type: String,
      required: [true, 'Zip code is required'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    contactPerson: {
      type: String,
      required: [true, 'Contact person name is required'],
      trim: true,
    },
    logo: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    subscription: {
      plan: {
        type: Schema.Types.ObjectId,
        ref: 'SubscriptionPlan',
        required: [true, 'Subscription plan is required'],
      },
      status: {
        type: String,
        enum: ['active', 'inactive', 'canceled', 'past_due'],
        default: 'inactive',
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      stripeCustomerId: {
        type: String,
      },
      stripeSubscriptionId: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.School ||
  mongoose.model<SchoolDocument>('School', SchoolSchema);
