import mongoose, { Schema } from 'mongoose';
import { SubscriptionPlanDocument } from '@/types';

const SubscriptionPlanSchema = new Schema<SubscriptionPlanDocument>(
  {
    name: {
      type: String,
      required: [true, 'Plan name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Plan description is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'USD',
      trim: true,
    },
    features: {
      type: [String],
      default: [],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: [1, 'Duration must be at least 1 month'],
    },
    stripeProductId: {
      type: String,
    },
    stripePriceId: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SubscriptionPlan ||
  mongoose.model<SubscriptionPlanDocument>(
    'SubscriptionPlan',
    SubscriptionPlanSchema
  );
