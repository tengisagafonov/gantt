import React, {FC} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view/lib/typescript/src/types';
import {Colors, fontWeight, spacing} from 'config/Theme';

type ITabItemProps = SceneRendererProps & {
  navigationState: NavigationState<{key: string; title: string}>;
};

const getTranslateX = (
  scrollAmount: Animated.Value,
  maxScrollDistance: number,
) => Animated.multiply(scrollAmount, maxScrollDistance);

const TabItem: FC<ITabItemProps> = props => {
  const {routes, index} = props.navigationState;
  const {jumpTo, position, layout} = props;

  return (
    <View style={styles.tab}>
      {routes.map((i: {title: string; key: string}, idx: number) => (
        <TouchableOpacity
          key={idx}
          onPressIn={() => jumpTo(i.key)}
          style={styles.itemStyle}>
          <Text style={text(index === idx)}>{i.title}</Text>
        </TouchableOpacity>
      ))}
      <Animated.View style={animated(position, layout.width / routes.length)} />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {flexDirection: 'row', justifyContent: 'space-around'},
  itemStyle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.medium,
    color: Colors.white,
    backgroundColor: Colors.white,
  },
});

const animated = (position: Animated.Value, width: number) =>
  ({
    position: 'absolute',
    bottom: 0,
    borderColor: Colors.buttonActiveBlue,
    width: width,
    borderWidth: 1,
    transform: [{translateX: getTranslateX(position, width)}],
  } as Animated.AnimatedProps<ViewStyle>);

const text = (active: boolean) =>
  ({
    fontWeight: active ? fontWeight.bold : fontWeight.medium,
    color: active ? Colors.buttonActiveBlue : Colors.black,
  } as ViewStyle);

export default TabItem;
