import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../components/Button";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const Onboarding1 = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.formContainer}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <Image
            source={require("../assets/images/eclipse.png")}
            style={{ width: 77, height: 77, alignItems: "flex-start" }}
          />
          <Text style={[styles.title, { position: "absolute", left: 38 }]}>
            Monthly Track
          </Text>
        </View>

        <Image
          source={require("../assets/images/onboard1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.subtitle}>
          You can track your money, limit expenses and prioritize your finances
        </Text>
      </View>

      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={require("../assets/images/control.png")}
          resizeMode="contain"
          style={{ height: 10, width: 60 }}
        />
      </View>

      <View
        style={{
          marginVertical: 15,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity
            style={styles.second}
            onPress={() => {
              router.push("/signIn");
            }}
          >
            <Text style={styles.sign}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity
            style={styles.second}
            onPress={() => {
              router.navigate("/Onboarding2");
            }}
          >
            <Text style={styles.sign}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Onboarding1;
