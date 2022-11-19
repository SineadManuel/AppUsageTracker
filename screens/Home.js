import React from 'react'
import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
        <Text>Home</Text>
        <Button
            title="App Limit"
            onPress={() => navigation.navigate('App Limit')}
        />
    </View>
  )
}

export default Home