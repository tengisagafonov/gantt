export enum tabKeys {
  offers = 'offers',
  review = 'review',
  details = 'details',
}

export const routes = Object.keys(tabKeys).map(item => ({
  key: item,
  title: item,
}));
