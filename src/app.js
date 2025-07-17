import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import SkillScreen from './screens/SkillScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Sobre Mim' }} />
        <Stack.Screen name="Skill" component={SkillScreen} options={{ title: 'Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
