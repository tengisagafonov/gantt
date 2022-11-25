import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from 'app/components/header';

const Home = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header />
      <View style={styles.main}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center'},
});

export default Home;
