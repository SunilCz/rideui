import React from 'react';
import { View, Text } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen: React.FC = () => {
  return (
    <View>
      <Text>Register Screen</Text>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;
