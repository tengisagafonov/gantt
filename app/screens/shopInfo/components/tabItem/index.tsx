import React, {FC} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
  Route,
} from 'react-native-tab-view';
import {styles, anim, animated, text} from './styles';
import {Labels} from 'constants/labels';

type ITabItemProps = SceneRendererProps & {
  navigationState: NavigationState<Route>;
  scrollY: Animated.Value;
};

const TabItem: FC<ITabItemProps> = props => {
  const {routes, index} = props.navigationState;
  const {jumpTo, position, layout, scrollY} = props;

  return (
    <Animated.View style={[styles.tab, anim(scrollY)]}>
      {routes.map((i: Route, idx: number) => (
        <TouchableOpacity
          key={idx}
          onPressIn={() => jumpTo(i.key)}
          style={styles.itemStyle}>
          <Text style={text(index === idx)}>
            {Labels[i.title || ''] || 'undefined'}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View style={animated(position, layout.width / routes.length)} />
    </Animated.View>
  );
};

export default TabItem;
