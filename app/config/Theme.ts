import {Dimensions} from 'react-native';

export enum spacing {
  none = 0,
  tiny = 4,
  smaller = 8,
  medium = 12,
  large = 16,
  huge = 24,
  massive = 48,
}

export enum fontSize {
  smaller = 10,
  small = 12,
  medium = 14,
  large = 16,
  huge = 18,
}

export enum fontWeight {
  medium = '500',
  bold = '600',
  thick = '800',
}

export const Colors = {
  white: '#fff',
  bg: '#f4f4f4',
  black: '#000',
  buttonInactive: '#EDEDED',
  buttonActiveBlue: '#005DAC',
  lightBlue: '#7EAECF',
  start: '#C9C9C9',
  border: '#939393',
  red: '#C95858',
  green: '#7dd87d',
  greenDark: '#267E26',
  yellow: '#FFBF00',
  purple: '#B02997',
};

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
