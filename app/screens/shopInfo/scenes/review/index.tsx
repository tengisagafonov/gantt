import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'assets/icons';
import FastImage from 'react-native-fast-image';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';

const ReviewItem = () => {
  return (
    <View style={reviewItemStyle.main}>
      <View style={reviewItemStyle.body}>
        <FastImage style={reviewItemStyle.profile} />
        <View>
          <Text>Nikolas</Text>
          <View style={reviewItemStyle.row}>
            <Icon.Rating style={reviewItemStyle.rating} color={Colors.yellow} />
            <Text>4.5</Text>
          </View>
          <Text>4. dec 2022</Text>
        </View>
      </View>
      <Text>
        She is execellent and great worker would come again dskljd sakldj kalsj
        dklfjdslkfj
      </Text>
    </View>
  );
};

const Review = () => {
  return (
    <View>
      <View style={styles.general}>
        <View style={styles.row}>
          <Text style={styles.margin}>
            <Text style={styles.title}>4.8/</Text>
            <Text>5</Text>
          </Text>
          <Icon.Rating color={Colors.yellow} />
        </View>
        <Text style={styles.count}>146 reviews</Text>
      </View>
      {[...Array(10).keys()].map(i => (
        <ReviewItem key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  general: {padding: spacing.medium, alignSelf: 'center'},
  row: {flexDirection: 'row'},
  count: {marginTop: spacing.tiny, fontWeight: fontWeight.bold},
  title: {
    fontSize: fontSize.huge,
    fontWeight: fontWeight.medium,
  },
  margin: {marginRight: spacing.medium},
});

const reviewItemStyle = StyleSheet.create({
  main: {
    borderWidth: 2,
    marginTop: spacing.medium,
    padding: spacing.medium,
    borderColor: opacityColor(Colors.buttonInactive, 1),
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  profile: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: opacityColor(Colors.border, 0.6),
    marginRight: spacing.medium,
    borderRadius: 20,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  rating: {transform: [{scale: 0.6}, {translateY: -2}, {translateX: -2}]},
});

export default Review;
