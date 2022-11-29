import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';
import {Status} from 'app/types';
import {StatusColor} from 'constants/booking';

export const styles = StyleSheet.create({
  main: {flex: 1},
  cancellation: {
    padding: spacing.medium,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: Colors.red,
    backgroundColor: opacityColor(Colors.red, 0.1),
    marginTop: spacing.medium,
  },
  cancellationText: {color: Colors.border, marginTop: spacing.tiny},
  icon: {transform: [{scale: 0.8}], marginRight: spacing.tiny},
  profile: {
    backgroundColor: Colors.white,
    margin: spacing.smaller,
    padding: spacing.medium,
  },
  services: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {fontWeight: fontWeight.bold, fontSize: fontSize.large},
  price: {
    color: Colors.greenDark,
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.buttonActiveBlue,
  },
  name: {
    marginVertical: spacing.tiny,
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
  },
  code: {
    color: Colors.buttonActiveBlue,
    fontWeight: fontWeight.bold,
  },
  info: {
    marginTop: spacing.medium,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.buttonInactive,
    padding: spacing.medium,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export const status = (currentStatus: Status) =>
  ({
    backgroundColor: opacityColor(StatusColor[currentStatus], 0.1),
    padding: spacing.smaller,
    borderRadius: 4,
  } as ViewStyle);

export const statusText = (currentStatus: Status) =>
  ({
    color: StatusColor[currentStatus],
    fontWeight: fontWeight.bold,
  } as TextStyle);
