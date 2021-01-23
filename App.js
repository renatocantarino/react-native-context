import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import UserList from './src/forms/userList'
import User from './src/forms/user'
import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList" screenOptions={options}>
          <Stack.Screen name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Usuários",
                headerRight: () => (<Button onPress={() => navigation.navigate('User')} type="clear"
                                     icon={<Icon name="add" size={25} color="white" />}
                />
                )
              }

            }

            } />


          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const options = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',

}
