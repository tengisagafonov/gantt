import {Status} from 'app/types';
import {Labels} from 'constants/labels';

export const getTitle = (status: Status) => {
  if (status === Status.completed) {
    return Labels['Give Feedback'];
  }
  return Labels['Cancel booking'];
};
