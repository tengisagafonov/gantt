interface IWeekday {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Saturday: string;
  Sunday: string;
}

interface ILabels {
  [key: string]: string;
}

export const Labels = {
  Active: 'Active',
  Success: 'Success',
  Cancelled: 'Cancelled',
  Save: 'Save',
  Share: 'Share',
  FAQ: 'FAQ',
  'Cancel booking': 'Cancel booking',
  'Edit Profile': 'Edit Profile',
  'Cancellation Policy': 'Cancellation Policy',
  'Give Feedback': 'Give Feedback',
  'Privacy Policy': 'Privacy Policy',
  Offers: 'Offers',
  Review: 'Review',
  Details: 'Details',
  'About Us': 'About Us',
  'Time Table': 'Time Table',
  Contacts: 'Contacts',
  Call: 'Call',
} as ILabels;

export const WeekDays = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
} as IWeekday;

export const GeneralInfo = {
  'Cancellation Policy':
    'if you cancel less than 24 hours before your booking, you may be charged a cancellation fee up to the full amount of the services booked.',
};
