import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, fontSize, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';

const Person = ({
  title,
  onPress,
  active,
}: {
  title: string;
  onPress: () => void;
  active;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrap}>
      <FastImage style={[styles.worker, active && styles.selected]} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode={'tail'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const PersonsList = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.workers}>
      <Person
        title={'Любой'}
        onPress={() => setSelected(0)}
        active={selected === 0}
      />
      <ScrollView
        style={styles.pickWorker}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {[...Array(10).keys()].map(i => (
          <Person
            key={i}
            title={'Name'}
            onPress={() => setSelected(i + 1)}
            active={selected === i + 1}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  worker: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: opacityColor(Colors.border, 0.6),
  },
  wrap: {
    alignItems: 'center',
    marginVertical: spacing.tiny,
    marginHorizontal: spacing.medium,
  },
  workers: {flexDirection: 'row'},
  pickWorker: {
    borderLeftWidth: 1,
    borderColor: opacityColor(Colors.border, 0.6),
  },
  selected: {borderColor: Colors.buttonActiveBlue, borderWidth: 2},
  name: {fontSize: fontSize.smaller, width: 50, textAlign: 'center'},
});

export default PersonsList;
