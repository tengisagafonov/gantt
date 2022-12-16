export enum tabKeys {
  offers = 'Offers',
  review = 'Review',
  details = 'Details',
}

export const routes = Object.values(tabKeys).map(item => ({
  key: item,
  title: item,
}));
