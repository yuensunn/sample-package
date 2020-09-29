import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { defaultHeaderText } from '@sample-package/header';
export default function App() {
  React.useEffect(() => {
    // SamplePackage.multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result:{defaultHeaderText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
