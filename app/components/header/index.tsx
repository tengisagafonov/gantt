import React from 'react';
import {View, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, spacing} from 'config/Theme';
import {ChevronIcon} from 'assets/icons';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <ChevronIcon />
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
