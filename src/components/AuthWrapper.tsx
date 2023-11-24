import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthStack = createStackNavigator();

const AuthWrapper: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginForm} />
      <AuthStack.Screen name="Register" component={RegisterForm} />
    </AuthStack.Navigator>
  );
};

export default AuthWrapper;
