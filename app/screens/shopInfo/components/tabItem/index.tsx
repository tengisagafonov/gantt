import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view/lib/typescript/src/types';
import {Colors, spacing} from 'config/Theme';

type ITabItemProps = SceneRendererProps & {
  navigationState: NavigationState<{key: string; title: string}>;
};

const TabItem: FC<ITabItemProps> = props => {
  const {routes, index} = props.navigationState;
  const {jumpTo} = props;
  return (
    <View style={styles.tab}>
      {routes.map((i: {title: string; key: string}, idx: number) => (
        <TouchableOpacity
          key={idx}
          onPressIn={() => jumpTo(i.key)}
          style={itemStyle(index === idx)}>
          <Text style={text(index === idx)}>{i.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {flexDirection: 'row', justifyContent: 'space-around'},
});

const itemStyle = (active: boolean) =>
  ({
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.medium,
    color: active ? Colors.white : Colors.black,
    backgroundColor: active ? Colors.buttonActiveBlue : Colors.white,
  } as ViewStyle);

const text = (active: boolean) =>
  ({
    color: active ? Colors.white : Colors.black,
  } as ViewStyle);

export default TabItem;
