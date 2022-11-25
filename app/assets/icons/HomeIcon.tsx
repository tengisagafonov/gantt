import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({color}: {color: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 22.1818V10.1818L12 2L21 10.1818V22.1818H3Z"
        stroke={color ? color : '#2329D6'}
      />
    </Svg>
  );
};

export default HomeIcon;
