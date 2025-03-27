import mongoose, { Schema } from 'mongoose';
import { NotificationDocument } from '@/types';

const NotificationSchema = new Schema<NotificationDocument>(
  {
    type: {
      type: String,
      enum: ['arrival', 'delay', 'emergency', 'system'],
      required: [true, 'Notification type is required'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender is required'],
    },
    recipients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    route: {
      type: Schema.Types.ObjectId,
      ref: 'Route',
    },
    school: {
      type: Schema.Types.ObjectId,
      ref: 'School',
      required: [true, 'School reference is required'],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Notification ||
  mongoose.model<NotificationDocument>('Notification', NotificationSchema);
