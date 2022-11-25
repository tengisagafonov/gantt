import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../config/Colors';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.text}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: Colors.buttonInactive,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 26,
    marginHorizontal: 16,
  },
  text: {
    color: Colors.border,
    fontSize: 18,
    fontWeight: '600',
  },
  back: {
    position: 'absolute',
    left: 0,
    backgroundColor: Colors.buttonInactive,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
