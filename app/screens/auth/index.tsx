import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, spacing} from 'app/config/Theme';

const Auth: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('bottomNavigation')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    backgroundColor: Colors.buttonActiveBlue,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.huge,
    borderRadius: 5,
  },
  text: {color: Colors.white},
});

export default Auth;
