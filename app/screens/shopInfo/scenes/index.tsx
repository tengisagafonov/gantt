import React from 'react';
import {TabView} from 'react-native-tab-view';
import {View} from 'react-native';
import TabItem from '../components/tabItem';
import {routes, tabKeys} from 'constants/shopInfo';

const Tabs = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = ({route}: {route: {key: string}}) => {
    switch (route.key) {
      case tabKeys.offers:
        return <View />;
      case tabKeys.review:
        return <View />;
      case tabKeys.details:
        return <View />;
      default:
        return null;
    }
  };

  return (
    <TabView
      onIndexChange={idx => setIndex(idx)}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={props => <TabItem {...props} />}
    />
  );
};

export default Tabs;
