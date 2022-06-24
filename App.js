import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts,SourceSansPro_600SemiBold,SourceSansPro_700Bold,} from '@expo-google-fonts/source-sans-pro';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home';
import Details from './src/screens/details';


const Stack = createNativeStackNavigator();

export default function App() {
  // here load google font

  let [fontsLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Font loading ....</Text>;
  }
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Details" component={Details} />
       </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="black" />
    </>
  );
}

