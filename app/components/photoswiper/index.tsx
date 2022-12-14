import React, {useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Colors, screenWidth, spacing} from 'config/Theme';
import FastImage from 'react-native-fast-image';

const defaultImg = require('../../assets/images/default.png');

const data = [{url: ''}, {url: ''}, {url: ''}, {url: ''}, {url: ''}];

const PhotoItem = () => {
  return (
    <FastImage
      source={defaultImg}
      style={styles.photo}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export const PhotoSwiper = () => {
  const [page, setPage] = useState(0);

  const scrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    let contentOffset = e.nativeEvent.contentOffset;
    setPage(Math.floor(contentOffset.x / screenWidth));
  };

  return (
    <View style={styles.main}>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        onScroll={scrollEnd}
        keyExtractor={(item, idx) => item?.url + idx}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth}
        data={data}
        renderItem={PhotoItem}
      />
      <View style={styles.indicator}>
        {data.map((i, idx) => (
          <View style={[styles.inactive, idx === page && styles.active]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  indicator: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: spacing.medium,
    right: spacing.tiny,
  },
  active: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  inactive: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    marginRight: spacing.tiny,
  },
  photo: {
    width: screenWidth,
    height: 200,
  },
});
