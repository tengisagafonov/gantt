interface ILabels {
  [key: string]: string | undefined;
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
} as ILabels;

export const GeneralInfo = {
  'Cancellation Policy':
    'if you cancel less than 24 hours before your booking, you may be charged a cancellation fee up to the full amount of the services booked.',
};
