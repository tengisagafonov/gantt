import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {CallIcon, ChevronIcon} from 'assets/icons';
import {opacityColor} from 'utils/items';

interface IHeaderProps {
  title?: string;
  phone?: string;
}

const Header = (props: IHeaderProps) => {
  const navigation = useNavigation();
  const {title, phone} = props;
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
          <ChevronIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {phone && (
          <TouchableOpacity style={styles.phone}>
            <CallIcon />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingBottom: spacing.medium,
    borderBottomWidth: 2,
    borderColor: Colors.buttonInactive,
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
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
  phone: {
    position: 'absolute',
    right: spacing.none,
    backgroundColor: opacityColor(Colors.green, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
