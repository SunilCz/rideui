import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen: React.FC = () => {
  return (
    <View>
      <Text>Login Screen</Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
