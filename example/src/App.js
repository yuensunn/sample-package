import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { defaultHeaderText } from '@sample-package/header';
export default function App() {
  React.useEffect(() => {
    // SamplePackage.multiply(3, 7).then(setResult);
  }, []);
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, null, 'Result:', defaultHeaderText)
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
