import React, {useRef} from 'react';
import {Animated, StyleSheet, ScrollView} from 'react-native';
import {TabView, Route} from 'react-native-tab-view';
import {routes, tabKeys} from 'constants/shopInfo';
import TabItem from '../components/tabItem';
import Offers from '../scenes/offers';
import {Colors} from 'config/Theme';

const useTabs = () => {
  const [index, setIndex] = React.useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderScene = React.useCallback(
    ({route}: {route: Route}) => {
      let Scene;
      switch (route.key) {
        case tabKeys.offers:
          Scene = Offers;
          break;
        case tabKeys.details:
          Scene = Offers;
          break;
        case tabKeys.review:
          Scene = Offers;
          break;
        default:
          Scene = Offers;
      }

      if (route.key !== tabKeys.offers) {
        scrollY.setValue(0);
      }

      return (
        <ScrollView
          scrollEventThrottle={0.05}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {
              useNativeDriver: false,
            },
          )}>
          <Scene />
        </ScrollView>
      );
    },
    [scrollY],
  );

  return {
    scrollY,
    index,
    setIndex,
    renderScene,
  };
};

const Tabs = () => {
  const {scrollY, index, setIndex, renderScene} = useTabs();

  return (
    <Animated.View style={[styles.main, index === 0 && anim(scrollY)]}>
      <TabView
        style={styles.tab}
        onIndexChange={idx => setIndex(idx)}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={TabItem}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  tab: {backgroundColor: Colors.bg},
});

const anim = (scrollY: Animated.Value) => ({
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

export default Tabs;
