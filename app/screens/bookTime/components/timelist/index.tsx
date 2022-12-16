import React from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';

const TimeList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[...Array(10).keys()].map(i => (
        <TouchableOpacity key={i} style={styles.time}>
          <Text>9:3{i}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  time: {
    borderWidth: 1,
    marginLeft: spacing.medium,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.huge,
    borderColor: opacityColor(Colors.border, 0.6),
  },
});

export default TimeList;
