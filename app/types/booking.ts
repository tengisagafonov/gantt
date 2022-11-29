export const enum Status {
  accepted = 'accepted',
  submitted = 'submitted',
  ongoing = 'ongoing',
  cancelled = 'cancelled',
}

export type BookingsColorType = {
  [key in Status]: string;
};

export type BookingItemType = {
  status: Status;
};
