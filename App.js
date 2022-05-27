import * as React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text
          /* onPress={() => navigation.navigate('Home')} */
          style={{ fontSize: 26, fontWeight: 'bold' }} >
              Hello World!
      </Text>
    </View>
  );
}

export default App;