import React from 'react';
import {View} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';
import {ProfileStackList} from 'app/screens';

interface IProfileDetails {
  route: RouteProp<ProfileStackList, 'ProfileDetails'>;
}

const ProfileDetails = (props: IProfileDetails) => {
  const {title} = props.route.params;

  return (
    <View>
      <Header title={title} />
    </View>
  );
};

export default ProfileDetails;
