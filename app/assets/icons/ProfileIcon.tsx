import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = ({color}: {color: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 20C4 17 8 17 10 15C11 14 8 14 8 9C8 5.667 9.333 4 12 4C14.667 4 16 5.667 16 9C16 14 13 14 14 15C16 17 20 17 20 20"
        stroke={color ? color : '#2329D6'}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
