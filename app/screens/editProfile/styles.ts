import {StyleSheet} from 'react-native';
import {Colors, fontSize, fontWeight, screenWidth, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';

export const styles = StyleSheet.create({
  general: {backgroundColor: Colors.white, flex: 1},
  main: {
    alignItems: 'center',
    marginVertical: spacing.medium,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: Colors.buttonInactive,
  },
  form: {padding: spacing.medium},
  label: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
    marginVertical: spacing.medium,
    color: opacityColor(Colors.border, 1),
  },
  textInput: {
    borderWidth: 1,
    padding: spacing.medium,
    borderColor: opacityColor(Colors.border, 0.6),
    borderRadius: 8,
  },
  add: {
    position: 'absolute',
    bottom: -15,
    left: screenWidth / 2 - 36 / 2,
    backgroundColor: Colors.white,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  button: {
    marginTop: 'auto',
    marginBottom: spacing.medium,
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    padding: spacing.large,
    width: '95%',
    borderRadius: 12,
    backgroundColor: Colors.buttonActiveBlue,
  },
  text: {
    color: Colors.white,
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
  },
});
