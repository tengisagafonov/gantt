import React from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import {routes, tabKeys} from 'constants/shopInfo';
import TabItem from '../components/tabItem';
import Offers from '../scenes/offers';

const Tabs = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = SceneMap({
    [tabKeys.offers]: Offers,
    [tabKeys.review]: Offers,
    [tabKeys.details]: Offers,
  });

  return (
    <TabView
      onIndexChange={idx => setIndex(idx)}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={TabItem}
    />
  );
};

export default Tabs;
