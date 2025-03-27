import mongoose, { Schema } from 'mongoose';
import { DriverDocument } from '@/types';

const DriverSchema = new Schema<DriverDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    school: {
      type: Schema.Types.ObjectId,
      ref: 'School',
      required: [true, 'School reference is required'],
    },
    licenseNumber: {
      type: String,
      required: [true, 'License number is required'],
      trim: true,
    },
    licenseExpiry: {
      type: Date,
      required: [true, 'License expiry date is required'],
    },
    vehicleDetails: {
      model: {
        type: String,
        required: [true, 'Vehicle model is required'],
        trim: true,
      },
      registrationNumber: {
        type: String,
        required: [true, 'Registration number is required'],
        trim: true,
      },
      capacity: {
        type: Number,
        required: [true, 'Vehicle capacity is required'],
        min: [1, 'Capacity must be at least 1'],
      },
      type: {
        type: String,
        enum: ['bus', 'van', 'other'],
        default: 'bus',
      },
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

export default mongoose.models.Driver ||
  mongoose.model<DriverDocument>('Driver', DriverSchema);
