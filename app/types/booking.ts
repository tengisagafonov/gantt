export const enum Status {
  accepted = 'accepted',
  submitted = 'submitted',
  ongoing = 'ongoing',
  cancelled = 'cancelled',
  completed = 'completed',
}

export type BookingsColorType = {
  [key in Status]: string;
};

export type BookingItemType = {
  status: Status;
};
