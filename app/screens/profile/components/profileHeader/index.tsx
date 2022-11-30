import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {Labels} from 'constants/labels';

interface IProfileHeaderProps {
  navigate: () => void;
}

const ProfileHeader = (props: IProfileHeaderProps) => {
  const {navigate} = props;
  return (
    <View style={styles.main}>
      <FastImage style={styles.img} source={{uri: ''}} />
      <Text style={styles.title}>Albert Einstein</Text>
      <Text style={styles.email}>alberteinstein@gmail.com</Text>
      <TouchableOpacity style={styles.button} onPress={navigate}>
        <Text style={styles.label}>{Labels['Edit Profile']}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignItems: 'center', marginVertical: spacing.huge},
  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: Colors.buttonInactive,
  },
  title: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
    marginTop: spacing.large,
  },
  email: {marginVertical: spacing.tiny},
  button: {
    marginTop: spacing.medium,
    borderWidth: 1,
    alignItems: 'center',
    padding: spacing.medium,
    width: '40%',
    borderRadius: 12,
    borderColor: Colors.buttonActiveBlue,
  },
  label: {color: Colors.buttonActiveBlue, fontWeight: fontWeight.bold},
});

export default ProfileHeader;
