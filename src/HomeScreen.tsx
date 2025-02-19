import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const HomeScreen = () => {
    const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Scandit')}>
              <Text>
                Go To Scandit
              </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
});
