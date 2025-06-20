import {Stack} from "expo-router"


  const AuthScreens = ()=> {
 return(
    <Stack screenOptions={{headerShown: false}}>
     <Stack.Screen name="login" />
     <Stack.Screen name="signIn" />

    </Stack>
  );
}
export default AuthScreen;
