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

const Onboarding3 = () => {
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
          onPress={() => {
            router.navigate("/signIn");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding3;
