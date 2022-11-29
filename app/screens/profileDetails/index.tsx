import React from 'react';
import {View} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';
import {ProfileStackList} from 'app/screens';

const ProfileDetails = ({
  route,
}: {
  route: RouteProp<ProfileStackList, 'ProfileDetails'>;
}) => {
  const {title} = route.params;

  return (
    <View>
      <Header title={title} />
    </View>
  );
};

export default ProfileDetails;
