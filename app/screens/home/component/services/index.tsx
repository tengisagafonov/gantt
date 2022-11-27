import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import React from 'react';

const services = [
  'Салоны красоты',
  'Барбер шоп',
  'Рестораны',
  'PlayStation',
  'Karaoke',
  'Каток',
];

const Services = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Services</Text>
      </View>
      <View style={styles.block}>
        {services.map((i, idx) => (
          <TouchableOpacity key={idx} style={service((idx + 1) % 3 === 0)}>
            <Text style={styles.text}>{i}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.view}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    padding: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.medium,
  },
  viewAll: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: spacing.medium,
    borderBottomWidth: 1,
    borderColor: Colors.buttonActiveBlue,
  },
  view: {
    color: Colors.buttonActiveBlue,
    fontWeight: fontWeight.bold,
    marginRight: spacing.tiny,
  },
  title: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
  },
  block: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    padding: spacing.tiny,
    color: Colors.white,
    fontWeight: fontWeight.bold,
  },
});

const service = (isLast: boolean) =>
  ({
    backgroundColor: Colors.buttonActiveBlue,
    borderRadius: 4,
    width: '30%',
    marginTop: spacing.medium,
    height: 60,
    marginRight: isLast ? 0 : '4.9%',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle);

export default Services;
