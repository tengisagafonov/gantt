import React from 'react';
import HomeIcon from './HomeIcon';
import BookingIcon from './BookingIcon';
import ProfileIcon from './ProfileIcon';
import {MainBottomTabs} from '../../constants/routes';

const TabIcons = ({name, color}: {name: string; color: string}) => {
  if (name === MainBottomTabs.Home) {
    return <HomeIcon color={color} />;
  } else if (name === MainBottomTabs.Booking) {
    return <BookingIcon color={color} />;
  }
  return <ProfileIcon color={color} />;
};

export default TabIcons;
