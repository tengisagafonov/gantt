import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';

const BookingMenu = () => {
  const [s, setS] = useState<number>(0);

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => setS(0)} style={menuItem(s === 0)}>
        <Text style={styles.text}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setS(1)} style={menuItem(s === 1)}>
        <Text style={styles.text}>Success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setS(2)} style={menuItem(s === 2)}>
        <Text style={styles.text}>Cancelled</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    margin: spacing.medium,
    backgroundColor: Colors.buttonInactive,
    padding: spacing.tiny,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  text: {fontWeight: fontWeight.bold, fontSize: fontSize.large},
});

const menuItem = (isActive: boolean) =>
  ({
    width: '32%',
    alignItems: 'center',
    backgroundColor: isActive ? Colors.yellow : Colors.buttonInactive,
    padding: spacing.smaller,
    borderRadius: 8,
    opacity: 0.8,
  } as ViewStyle);

export default BookingMenu;
