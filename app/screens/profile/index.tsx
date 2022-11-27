import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from 'app/components/header';
import ProfileHeader from 'app/screens/profile/components/profileHeader';
import ProfileItem from 'app/screens/profile/components/profileItem';
import {Colors} from 'config/Theme';

const Profile = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Profile'} />
      <ScrollView style={styles.main}>
        <ProfileHeader />
        <ProfileItem title={'Register as a Partner'} />
        <ProfileItem title={'Share'} />
        <ProfileItem title={'FAQ'} />
        <ProfileItem title={'Privacy Policy'} />
        <ProfileItem title={'Logout'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center', width: '100%', backgroundColor: Colors.white},
});

export default Profile;
