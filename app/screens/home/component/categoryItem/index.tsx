import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';

const CategoryItem = ({item}: {item: any}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{item.title}</Text>
      <ScrollView>
        <View>
          <Text>hi</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingVertical: spacing.medium,
    paddingLeft: spacing.medium,
  },
  title: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
  },
});

export default CategoryItem;
