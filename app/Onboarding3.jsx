import {useEffect}from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Notifications from 'expo-notifications'
import COLORS from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../components/Button";
import { router } from "expo-router";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const { width, height } = Dimensions.get("window");

const Onboarding3 = () => {


    const handleLocalNotification = async () => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "WELCOME TO TRACKWISE!",
          body: "You can now track your finances easily.",
          sound: true,
          data: { customData: "any value" },
        },
        trigger: null, // Show immediately
      });
    };
  return (
    <SafeAreaView style={styles.onboard}>
      <View style={styles.onboard}>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 40 }}
        >
          <Image
            source={require("../assets/images/eclipse.png")}
            style={{ width: 77, height: 77, alignItems: "flex-start" }}
          />
          <Text
            style={[
              styles.title,
              { position: "absolute", left: 48 },
            ]}
          >
            Goals
          </Text>
        </View>

        <Image
          source={require("../assets/images/onboard3.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.subtitle}>
          Set your financial goals and TrackWISE will help you meet them without
          stress!
        </Text>
      </View>

      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={require("../assets/images/control3.png")}
          resizeMode="contain"
          style={{ height: 10, width: 60 }}
        />
      </View>

      <View style={{ paddingHorizontal: 10, marginVertical: 20 }}>
        <Button
          text={"Get Started"}
          onPress={async () => {
              await handleLocalNotification();
              router.navigate("/signIn");
            }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding3;
