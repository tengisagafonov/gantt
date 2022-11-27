import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {spacing, Colors, fontWeight, fontSize} from 'config/Theme';
import {ChevronIcon} from 'assets/icons';

const ProfileItem = ({title}: {title: string}) => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.row}>
        <View style={styles.circle} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <ChevronIcon style={styles.chevron} color={Colors.border} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: spacing.large,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.buttonInactive,
  },
  row: {flexDirection: 'row'},
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: spacing.medium,
    borderColor: Colors.border,
  },
  title: {fontWeight: fontWeight.medium, fontSize: fontSize.large},
  chevron: {transform: [{rotate: '180deg'}]},
});

export default ProfileItem;
