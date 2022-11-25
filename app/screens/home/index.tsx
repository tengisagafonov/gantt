import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from 'app/components/header';
import CategoryItem from './component/categoryItem';

const Home = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Home'} />
      <ScrollView style={styles.main}>
        <CategoryItem item={{title: 'Our Best Services'}} />
        <CategoryItem item={{title: 'Next Thing on Your Mind'}} />
        <CategoryItem item={{title: 'Services'}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center', flex: 1, width: '100%'},
});

export default Home;
