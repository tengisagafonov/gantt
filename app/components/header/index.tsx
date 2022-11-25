import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, spacing} from 'app/config/Theme';

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
    paddingBottom: spacing.medium,
    borderBottomWidth: 2,
    borderColor: Colors.buttonInactive,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.huge,
    marginHorizontal: spacing.large,
  },
  text: {
    color: Colors.border,
    fontSize: 18,
    fontWeight: '600',
  },
  back: {
    position: 'absolute',
    left: spacing.none,
    backgroundColor: Colors.buttonInactive,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
