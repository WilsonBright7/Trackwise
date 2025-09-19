import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import authStyles from "./styles";
import { useState } from "react";
import COLORS from "../../constants/Colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userFocused, setUserFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');

  //Code Forgot Password
  const forgotPassword = async(email) => {
    try {
      const response = await axios.post("https://capstone-group-3-backend.onrender.com/api/users/forgot-password", {
        email,
      });
  
      console.log("Password reset email sent:", response.data);
      Alert.alert("Success", "Password reset instructions have been sent to your email.");
    } catch (error) {
      console.error("Error sending password reset:", error.response?.data || error.message);
      Alert.alert("Error", "Unable to send password reset. Please try again.");
    }
  };

  

  //Code for Login
  const handleSignIn = async () => {
    if (!emailPhone || !password) {
      Alert.alert("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://capstone-group-3-backend.onrender.com/api/users/signin",
        {
          email: emailPhone,
          password,
        }
      );

      console.log(response.data);
      if (response.data.status === true) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem('userData',JSON.stringify(response.data.data));
        router.push("/dashboard");
      }

      //Alert.alert('Signup successful!');
      // Navigate to next screen or dashboard here
    } catch (error) {
      console.log(error);
      Alert.alert('Signup failed', error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={authStyles.mainContainer}>
      <View style={authStyles.logoContainer}>
        <Image
          source={require("@/assets/images/trackwise.png")}
          style={authStyles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={authStyles.header}>
        <Text
          style={{
            fontFamily: "PoppinsBold",
            fontSize: 23,
            fontWeight: 600,
            color: COLORS.white,
          }}
        >
          Welcome to TrackWise
        </Text>
      </View>

      <View style={authStyles.formContainer}>
        <Text style={authStyles.inputLogin}>Login</Text>

        <View style={{ gap: 30 }}>
          <View style={authStyles.inputWrapper}>
            <TextInput
             
              style={[
                authStyles.input,
                {
                  borderWidth: userFocused ? 1 : 1,
                  borderColor: emailFocused ? COLORS.primary : COLORS.greyText,
                },
              ]}
              cursorColor={COLORS.primary}
              placeholder="Email"
              value={emailPhone}
              onChangeText={setEmailPhone}
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={() => {
                setEmailFocused(false);
              }}
              onFocus={() => {
                setEmailFocused(true);
              }}
            />
            <View style={{ position: "absolute", bottom: 25, left: 15 }}>
                <Image
                  source={require("@/assets/images/RoundEmail.png")}
                  resizeMode="contain"
                  style={{width:25, height:25}}
                />
              </View>
          </View>

          <View style={authStyles.inputWrapper}>
            <TextInput
              style={[
                authStyles.input,
                {
                  borderWidth: userFocused ? 1 : 1,
                  borderColor: passwordFocused
                    ? COLORS.primary
                    : COLORS.greyText,
                },
              ]}
              cursorColor={COLORS.primary}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onBlur={() => {
                setPasswordFocused(false);
              }}
              onFocus={() => {
                setPasswordFocused(true);
              }}
            />

            <View style={{ position: "absolute", bottom: 25, left: 15 }}>
                <Image
                  source={require("@/assets/images/padlock.png")}
                  resizeMode="contain"
                  style={{width:25, height:25}}
                />
              </View>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={authStyles.passwordVisibilityToggle}
          >
            <FontAwesome5
              name={showPassword ? "check-square" : "square"}
              size={20}
              resizeMode="contain"
              value={showPassword}
              onValueChange={setShowPassword}
              color={showPassword ? "#FFFFFF" : "#D9D9D9"}
              style={authStyles.checkbox}
            />
          </TouchableOpacity>

          <Text style={{ fontFamily: "PoppinsRegular", fontSize: 16 }}>
            Show Password
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Button
            text={loading ? "loging in..." : "Login"}
            onPress={handleSignIn}
            disable={loading}
            loading={loading}
          />
        </View>

        <View>
          <TouchableOpacity>
            <Text style={authStyles.forgotPasswordText}
            onPress={()=>forgotPassword(emailPhone)}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{ marginBottom: 8, borderBottomWidth: 1, width: 90 }}
          ></View>

          <Text style={{ fontFamily: "PoppinsRegular", fontSize: 18 }}>
            or login with
          </Text>

          <View
            style={{ borderBottomWidth: 1, marginBottom: 8, width: 90 }}
          ></View>
        </View>

        <View
          style={{
            flexDirection: "row",
            resizeMode: "contain",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <TouchableOpacity
              style={authStyles.googleSignInButton}
            >
              <Image
                source={require("@/assets/images/FB.png")}
                style={authStyles.googleLogo}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={authStyles.googleSignInButton}
            >
              <Image
                source={require("@/assets/images/GG.png")}
                style={authStyles.googleLogo}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={authStyles.googleSignInButton}>
              <Image
                source={require("@/assets/images/Apple.png")}
                style={authStyles.googleLogo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={authStyles.signUpPrompt}>
          <Text style={authStyles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity  onPress={() => {
              router.push("/signIn");
             }}>
            <Text style={authStyles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;