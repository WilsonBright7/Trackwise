import COLORS from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import homeStyles from "../style";

import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";


const barData = [
  { value: 40, label: "Food", frontColor: "#0263FF" },
  { value: 70, label: "Transport", frontColor: "#FF7723" },
  { value: 50, label: "Data", frontColor: "#8E30FF" },
  { value: 40, label: "Rent", frontColor: "#C07D65" },
  { value: 65, label: "Saving", frontColor: "#197B01" },
];



const Dashboard = () => {
const Dashboard = () => {
  const [user, setUser] = useState("");
  const [recentExpenses, setRecentExpenses] = useState([]);

  const [token, setToken] = useState("");
  const [user, setUser] = useState('')

// Process to ParsedData from Login to dashboard 
  useEffect(() => {
    (async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userData");
        if (!jsonValue) {
          console.log("No user data found");
          return;
        }

        const parsedData = JSON.parse(jsonValue);
        const authToken = parsedData?.token;

        if (!authToken) {
          console.warn("No token in userData");
          return;
        }

        setUser(parsedData);
        setToken(authToken); // optional
        console.log("Retrieved token:", authToken);

        const response = await axios.get(
          "https://capstone-group-3-backend.onrender.com/api/expense",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setRecentExpenses(response?.data?.data || []);
        console.log("Fetched expenses:", response?.data);
      } catch (error) {
        console.error("Error:", error?.response?.data || error.message);
      }
    })();
  }, []);

  useFocusEffect(
  useCallback(() => {
    const fetchExpenses = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userData");
        const parsedData = JSON.parse(jsonValue);
        const authToken = parsedData?.token;

        if (!authToken) {
          console.warn("No token found on screen focus");
          return;
        }

        const response = await axios.get(
          "https://capstone-group-3-backend.onrender.com/api/expense",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setRecentExpenses(response?.data?.data || []);
        console.log("Fetched expenses on screen focus:", response?.data);
      } catch (error) {
        console.error("Error fetching expenses on focus:", error?.response?.data || error.message);
      }
    };

    fetchExpenses();
  }, [])
);


  return (
    <SafeAreaView>
      <ScrollView style={homeStyles.container}>
        <View
          style={{flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginHorizontal:15}}>
          <Image style={{ width: 50, height: 50 }} source={require("../../assets/images/pix.png")}/>
          <Image style={{ width: 50, height: 50 }} source={require("../../assets/images/bell.png")}/>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{color: COLORS.white, fontFamily: "PoppinsBold", fontSize: 20,}}> Good afternoon  {user ? user?.fullname : ''}!
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/pix.png")}
          />
          <TouchableOpacity onPress={() => {
                router.navigate("/setting");
              }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/bell.png")}
          />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "PoppinsBold",
              fontSize: 20,
            }}
          >
            Hello {user ? user?.fullname : ""}!
          </Text>
          <Text style={{ color: COLORS.white, fontFamily: "PoppinsSemi" }}>
            20 days left for this month
          </Text>
          <Text style={{ color: COLORS.white, fontFamily: "PoppinsSemi" }}>20 days left for this month</Text>
        </View>
        <View style={homeStyles.loginBox}>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginBlock: -35, marginHorizontal: 10,}}>
            <Image style={{ width: 154.93, height: 88, marginHorizontal:15}} source={require("../../assets/images/card1.png")}/>
            <Image style={{ width: 154.93, height: 88 }} source={require("../../assets/images/card2.png")}/>
          </View>
          <View style={homeStyles.Box}>
            <Text style={{fontFamily: "PoppinsSemiBold", fontSize: 20, color: COLORS.white,}}>
              Month</Text>
            <Text style={{fontFamily: "PoppinsSemiBold", fontSize: 20, color: COLORS.white,}}
            >Statistics</Text>
          </View>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBlock: -35,
              paddingHorizontal: 24,
            }}
          >
            <Image
              style={{ width: 154.93, height: 88 }}
              source={require("../../assets/images/card1.png")}
            />
            <Image
              style={{ width: 154.93, height: 88 }}
              source={require("../../assets/images/card2.png")}
            />
          </View>
          <View style={homeStyles.Box}>
            <Text
              style={{
                fontFamily: "PoppinsSemi",
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              Month
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsSemi",
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              Statistics
            </Text>
          </View>

          <View style={{ marginTop: 30 }}></View>
          <View>
            <BarChart
              barWidth={30}
              noOfSections={5}
              data={barData}
              isAnimated
              yAxisThickness={0.5}
              xAxisThickness={1}
              showXAxisIndices={true}
            />
          </View>

          <View style={{ alignSelf: "center", marginTop: 40 }}>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/expense");
              }}
              style={{
                backgroundColor: COLORS.primary,
                width: 200,
                height: 50,
                borderRadius: 29,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsSemi",
                  fontSize: 20,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                Add Expense +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.Line}></View>
          <Text
            style={{
              fontFamily: "PoppinsSemi",
              fontSize: 16,
              color: COLORS.primary,
              marginTop: 10,
              marginHorizontal: 10,
            }}
          >
            Recent Expenses
          </Text>

          <View style={homeStyles.recentContainer}>
            {recentExpenses?.map((exp, idx) => (
              <View style={homeStyles.expenseItem} key={idx}>
                <MaterialIcons
                  name={exp.icon || "receipt"} // fallback icon
                  size={24}
                  color="#333"
                  style={{ width: 30 }}
                />
                <Text style={homeStyles.expenseText}>{exp.description}</Text>
                <Text style={homeStyles.expenseCost}> ₦ {exp.amount}</Text>
                <Text style={homeStyles.expenseDate}>{exp.date}</Text>
              </View>
            ))}
            <Text style={homeStyles.viewList}>View full list</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
