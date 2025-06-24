import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import style from "./style";
import COLORS from "../constants/Colors";
import { logProfileData } from "react-native-calendars/src/Profiler";
import BudgetItem from "../components/textInput";

const Budget = () => {
  const [userFood, setUserFood] = useState(false);
  const [userHouse, setUserHouse] = useState(false);
  const [userCloth, setUserCloth] = useState(false);
  const [userFuel, setUserFuel] = useState(false);
  const [userElect, setUserElect] = useState(false);
  const [userInter, setUserInter] = useState(false);
  const [userEnter, setUserEnter] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <View style={{ marginVertical: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <MaterialIcons
                onPress={() => router.back("/expense")}
                name="keyboard-backspace"
                size={24}
                color="white"
                style={{ paddingLeft: 10 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "PoppinsBold",
                fontSize: 24,
                textAlign: "center",
                paddingRight: 100,
                color: "white",
              }}
            >
              Create Budget
            </Text>
          </View>
        </View>
        <View style={style.loginBox}>
          <View style={{ marginTop: 20, padding: 10 }}>
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 20 }}>
              Total Allocation Vs. Budget
            </Text>
            <View
              style={{
                height: 6,
                width: "100%",
                backgroundColor: "#E0E0E0",
                borderRadius: 3,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  height: 6,
                  width: "60%",
                  backgroundColor: COLORS.primary,
                  borderRadius: 3,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 30, padding: 10 }}>
            <Text style={{ fontFamily: "PoppinsRegular", fontSize: 20 }}>
              Category
            </Text>
          </View>

          <BudgetItem
            icon={require("../assets/images/Food.png")}
            focus={userFood}
            setFocus={setUserFood}
          />

          <BudgetItem
            icon={require("../assets/images/House.png")}
            focus={userHouse}
            setFocus={setUserHouse}
          />

          <BudgetItem
            icon={require("../assets/images/Cloth.png")}
            focus={userCloth}
            setFocus={setUserCloth}
          />

          <BudgetItem
            icon={require("../assets/images/Fuel.png")}
            focus={userFuel}
            setFocus={setUserFuel}
          />

          <BudgetItem
            icon={require("../assets/images/Electric.png")}
            focus={userElect}
            setFocus={setUserElect}
          />

          <BudgetItem
            icon={require("../assets/images/Internet.png")}
            focus={userInter}
            setFocus={setUserInter}
          />

          <BudgetItem
            icon={require("../assets/images/Entertain.png")}
            focus={userEnter}
            setFocus={setUserEnter}
          />

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "flex-end",
            }}
          >
            <AntDesign name="pluscircleo" size={30} color="#26A69A" />
          </View>
          <View>
            <Button
              onPress={() => {
                router.navigate("/expense");
              }}
              text={"Set Budget"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Budget;
