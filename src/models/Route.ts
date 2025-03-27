import mongoose, { Schema } from 'mongoose';
import { RouteDocument } from '@/types';

const StopSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Stop name is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Stop address is required'],
    trim: true,
  },
  time: {
    type: String,
    required: [true, 'Stop time is required'],
  },
  coordinates: {
    lat: {
      type: Number,
      required: [true, 'Latitude is required'],
    },
    lng: {
      type: Number,
      required: [true, 'Longitude is required'],
    },
  },
});

const RouteSchema = new Schema<RouteDocument>(
  {
    name: {
      type: String,
      required: [true, 'Route name is required'],
      trim: true,
    },
    school: {
      type: Schema.Types.ObjectId,
      ref: 'School',
      required: [true, 'School reference is required'],
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
      required: [true, 'Driver reference is required'],
    },
    stops: [StopSchema],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Route ||
  mongoose.model<RouteDocument>('Route', RouteSchema);
