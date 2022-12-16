import {Animated, StyleSheet, ViewStyle} from 'react-native';
import {Colors, fontWeight, spacing} from 'config/Theme';

const getTranslateX = (
  scrollAmount: Animated.Value,
  maxScrollDistance: number,
) => Animated.multiply(scrollAmount, maxScrollDistance);

export const styles = StyleSheet.create({
  tab: {
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemStyle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.medium,
    color: Colors.white,
    backgroundColor: Colors.white,
  },
});

export const animated = (position: Animated.Value, width: number) =>
  ({
    position: 'absolute',
    bottom: 0,
    borderColor: Colors.buttonActiveBlue,
    width: width,
    borderWidth: 1,
    transform: [{translateX: getTranslateX(position, width)}],
  } as Animated.AnimatedProps<ViewStyle>);

export const anim = (scrollY: Animated.Value) => ({
  transform: [
    {
      translateY: scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: 'clamp',
      }),
    },
  ],
});

export const text = (active: boolean) =>
  ({
    fontWeight: active ? fontWeight.bold : fontWeight.medium,
    color: active ? Colors.buttonActiveBlue : Colors.black,
  } as ViewStyle);
