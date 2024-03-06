/**
 * @format
 */
import {createRoot} from 'react-dom/client';
import {Platform} from 'react-native';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'));
  // eslint-disable-next-line react/react-in-jsx-scope
  root.render(<App />);
}
