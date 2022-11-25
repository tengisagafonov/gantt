import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BookingIcon = ({color}: {color: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 5H21V21H3V5Z"
        stroke={color ? color : '#2329D6'}
        stroke-linejoin="round"
      />
      <Path
        d="M21 9H3"
        stroke={color ? color : '#2329D6'}
        stroke-linecap="round"
      />
      <Path
        d="M7 5V3"
        stroke={color ? color : '#2329D6'}
        stroke-linecap="round"
      />
      <Path
        d="M17 5V3"
        stroke={color ? color : '#2329D6'}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default BookingIcon;
