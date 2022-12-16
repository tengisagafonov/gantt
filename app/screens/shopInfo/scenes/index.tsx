import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, ScrollView, View, ViewStyle} from 'react-native';
import {TabView, Route} from 'react-native-tab-view';
import {routes, tabKeys} from 'constants/shopInfo';
import TabItem from '../components/tabItem';
import Offers from '../scenes/offers';
import {Colors} from 'config/Theme';
import Review from './review';
import Details from './details';

const useTabs = (height: number) => {
  const [index, setIndex] = React.useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(scrollY, {
      duration: 300,
      useNativeDriver: false,
      toValue: index !== 0 ? height : 0,
    }).start();
  }, [scrollY, index, height]);

  const renderScene = React.useCallback(
    ({route}: {route: Route}) => {
      let Scene;
      switch (route.key) {
        case tabKeys.offers:
          Scene = Offers;
          break;
        case tabKeys.details:
          Scene = Details;
          break;
        case tabKeys.review:
          Scene = Review;
          break;
        default:
          Scene = Offers;
      }

      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={0.5}
          onScroll={
            index !== 0
              ? undefined
              : Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
                  useNativeDriver: false,
                })
          }
          contentContainerStyle={padding(index, height)}>
          <Scene />
        </ScrollView>
      );
    },
    [scrollY, height, index],
  );

  return {
    scrollY,
    index,
    setIndex,
    renderScene,
  };
};

const Tabs = ({
  renderHeaderComponent,
}: {
  renderHeaderComponent: React.ReactNode;
}) => {
  const [height, setHeight] = useState<number>(0);
  const {scrollY, index, setIndex, renderScene} = useTabs(height);
  return (
    <View style={[styles.main]}>
      <TabView
        style={styles.tab}
        onIndexChange={idx => setIndex(idx)}
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={props => <TabItem {...props} scrollY={scrollY} />}
      />
      <Animated.View
        onLayout={e => setHeight(e.nativeEvent.layout.height)}
        style={anim(scrollY)}>
        {renderHeaderComponent}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  tab: {backgroundColor: Colors.bg},
});

const anim = (scrollY: Animated.Value) =>
  ({
    position: 'absolute',
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, -200],
          extrapolate: 'clamp',
        }),
      },
    ],
  } as Animated.AnimatedProps<ViewStyle>);

const padding = (index: number, height: number) => ({
  paddingTop: index === 0 ? height : 0,
});

export default Tabs;
