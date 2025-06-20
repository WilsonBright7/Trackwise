import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsSemi: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf')


  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" />
        <Stack.Screen name="Onboarding2" />
        <Stack.Screen name="Onboarding3" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='account' />
        <Stack.Screen name='home' />
        <Stack.Screen name='expense' />
        <Stack.Screen name='budget' />
        <Stack.Screen name='setting' />
      </Stack>


  );
}
