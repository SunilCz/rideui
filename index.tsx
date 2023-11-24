/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // Update the path based on your project structure
import appConfig from './app.json';

const appName = appConfig.expo.name;

AppRegistry.registerComponent(appName, () => App);
