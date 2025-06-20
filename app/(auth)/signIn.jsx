import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constants/Colors";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import authStyles from "./styles";
import axios from "axios";

const signIn = () => {
  const [fullName, setFullName] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userFocused, setUserFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !emailPhone || !password) {
      Alert.alert("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://capstone-group-3-backend.onrender.com/api/users/signup",
        {
          fullname: fullName,
          email: emailPhone,
          password,
        }
      );

      // Save token to AsyncStorage
      // await AsyncStorage.setItem('token', response.data.token);
      console.log(response.data);
      if (response.data.status === true) {
        router.push("/login");
      }

      // Alert.alert('Signup successful!');
      // Navigate to next screen or dashboard here
    } catch (error) {
      console.log(error);
      // Alert.alert('Signup failed', error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // const handleSignUp = () => {
  // Navigate to sign-up screen

//   const router = useRouter();
//   const navigation = useNavigation();

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

        <Text
          style={{
            fontFamily: "PoppinsRegular",
            fontSize: 17,
            fontWeight: 400,
          }}
        >
          Let's help you meet your tasks!
        </Text>
      </View>

      <ScrollView>
        <View style={authStyles.formContainer}>
          <Text style={authStyles.inputLabel}>
            Sign Up <Text style={{ fontSize: 16 }}>in few seconds</Text>{" "}
          </Text>

          <View style={{ gap: 30 }}>
            <View style={authStyles.inputWrapper}>

              <View style={{ position: "absolute", bottom: 25, left: 15 }}>
                <Image
                  source={require("@/assets/images/user.png")}
                  resizeMode="contain"
                  style={{width:25, height:25}}
                />
              </View>


              <TextInput
                style={[
                  authStyles.input,
                  {
                    borderWidth: userFocused ? 1 : 1,
                    borderColor: userFocused ? COLORS.primary : COLORS.greyText,
                  },
                ]}
                cursorColor={COLORS.primary}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                keyboardType="name"
                autoCapitalize="none"
                onBlur={() => {
                  setUserFocused(false);
                }}
                onFocus={() => {
                  setUserFocused(true);
                }}
              />
            </View>

            <View style={authStyles.inputWrapper}>
              <View style={{ position: "absolute", bottom: 20, left: 12 }}>
                <Image
                  source={require("@/assets/images/RoundEmail.png")}
                  resizeMode="contain"
                  style={{width:30, height:30}}
                />
              </View>
              <TextInput
                style={[
                  authStyles.input,
                  {
                    borderWidth: userFocused ? 1 : 1,
                    borderColor: emailFocused
                      ? COLORS.primary
                      : COLORS.greyText,
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
            </View>
            

            <View style={authStyles.inputWrapper}>
              <View style={{ position: "absolute", bottom: 25, left: 15 }}>
                <Image
                  source={require("@/assets/images/padlock.png")}
                  resizeMode="contain"
                  style={{width:25, height:25}}
                />
              </View>


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
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!passwordShown}
                onBlur={() => {
                  setPasswordFocused(false);
                }}
                onFocus={() => {
                  setPasswordFocused(true);
                }}
              />
              <View style={{ position: "absolute", bottom: 25, right: 20 }}>
                {passwordShown ? (
                  <Pressable
                    onPress={() => {
                      setPasswordShown(false);
                    }}
                  >
                    <FontAwesome5 name="eye" size={18} color="#00000" />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setPasswordShown(true);
                    }}
                  >
                    <FontAwesome5 name="eye-slash" size={18} color="#00000" />
                  </Pressable>
                )}
              </View>
            </View>
            <View style={authStyles.inputWrapper}>

              <View style={{ position: "absolute", bottom: 25, left: 15 }}>
                <Image
                  source={require("@/assets/images/padlock.png")}
                  resizeMode="contain"
                  style={{width:25, height:25}}
                />
              </View>
              
              <TextInput
                style={[
                  authStyles.input,
                  {
                    borderWidth: userFocused ? 1 : 1,
                    borderColor: confirmFocused
                      ? COLORS.primary
                      : COLORS.greyText,
                  },
                ]}
                cursorColor={COLORS.primary}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!showConfirmPassword}
                onBlur={() => {
                  setConfirmFocused(false);
                }}
                onFocus={() => {
                  setConfirmFocused(true);
                }}
              />

              <View style={{ position: "absolute", bottom: 25, right: 20 }}>
                {passwordShown ? (
                  <Pressable
                    onPress={() => {
                      setShowConfirmPassword(false);
                    }}
                  >
                    <FontAwesome5 name="eye" size={18} color="#00000" />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setShowConfirmPassword(true);
                    }}
                  >
                    <FontAwesome5 name="eye-slash" size={18} color="#00000" />
                  </Pressable>
                )}
              </View>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Button
              text={loading ? "Signing Up..." : "Sign Up"}
              onPress={handleSignUp}
              disable={loading}
            />
          </View>

          <View style={authStyles.signUpPrompt}>
            <Text style={authStyles.signUpText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => {
              router.navigate("/login");
             }}>
              <Text style={authStyles.signUpLink}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
