import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from 'app/components/header';
import FastImage from 'react-native-fast-image';
import {Labels} from 'constants/labels';
import {AddPhoto} from 'assets/icons';
import {styles} from './styles';

const FormItem = ({
  label,
  isPassword,
}: {
  label: string;
  isPassword?: boolean;
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} secureTextEntry={isPassword} />
    </View>
  );
};

const EditProfile = () => {
  return (
    <View style={styles.general}>
      <Header title={Labels['Edit Profile']} />
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{Labels.Save}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
