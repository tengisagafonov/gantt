import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from 'app/components/header';
import ProfileHeader from 'app/screens/profile/components/profileHeader';
import ProfileItem from 'app/screens/profile/components/profileItem';
import {Colors} from 'config/Theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {ProfileStackList} from 'app/screens';
import {Labels} from 'constants/labels';

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackList>>();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Profile'} />
      <ScrollView style={styles.main}>
        <ProfileHeader navigate={() => navigation.navigate('ProfileEdit')} />
        <ProfileItem title={'Register as a Partner'} />
        <ProfileItem
          title={Labels.Share}
          onPress={() =>
            navigation.navigate('ProfileDetails', {title: Labels.Share})
          }
        />
        <ProfileItem
          title={Labels.FAQ}
          onPress={() =>
            navigation.navigate('ProfileDetails', {title: Labels.Share})
          }
        />
        <ProfileItem
          title={Labels['Privacy Policy']}
          onPress={() =>
            navigation.navigate('ProfileDetails', {
              title: Labels['Privacy Policy'],
            })
          }
        />
        <ProfileItem title={'Logout'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center', width: '100%', backgroundColor: Colors.white},
});

export default Profile;
