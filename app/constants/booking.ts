import {Colors} from 'config/Theme';
import {BookingsColorType} from 'app/types';

export const StatusColor = {
  accepted: Colors.buttonActiveBlue,
  submitted: Colors.green,
  ongoing: Colors.yellow,
  cancelled: Colors.red,
} as BookingsColorType;
