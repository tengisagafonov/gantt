import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Header from 'app/components/header';
import FastImage from 'react-native-fast-image';
import {Labels} from 'constants/labels';
import {AddPhoto} from 'assets/icons';
import {styles} from './styles';

interface IFormItemProps {
  label: string;
  isPassword?: boolean;
}

const FormItem = (props: IFormItemProps) => {
  const {label, isPassword} = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} secureTextEntry={isPassword} />
    </View>
  );
};

const EditProfile = () => {
  return (
    <KeyboardAvoidingView
      style={styles.general}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title={Labels['Edit Profile']} />
      <ScrollView>
        <View style={styles.main}>
          <FastImage style={styles.img} source={{uri: ''}} />
          <TouchableOpacity style={styles.add}>
            <AddPhoto />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <FormItem label={'Name'} />
          <FormItem label={'Email'} />
          <FormItem label={'Mobile number'} />
          <FormItem label={'Password'} isPassword />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{Labels.Save}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
