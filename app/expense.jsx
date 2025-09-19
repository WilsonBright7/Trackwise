import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import COLORS from "../constants/Colors";
import homeStyles from "./style";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


    
   
   
const Expenses = () => {

  const [userFocus, setUserFocus] = useState(false);
  //  const [date, setDate] = useState(new Date());
  //  const [show, setShow] = useState(false);

   const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
    setDate(day.dateString); // Store as string
  };


    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    
const [token, setToken] = useState('');

useEffect(() => {
  const getDataFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("userData");
      if (jsonValue != null) {
        const parsedData = JSON.parse(jsonValue);
        setToken(parsedData?.token || '');
        console.log("Retrieved token:", parsedData?.token);
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  getDataFromStorage();
}, []);


  const handleAddExpense = async () => {
  if (!amount || !description || !date) {
    Alert.alert("All fields are required");
    return;
  }

  setLoading(true);
  try {
    console.log("Sending add expense data to API...");
if (!token) {
  Alert.alert("Authentication Error", "You must be logged in to add an expense.");
  setLoading(false);
  return;
}

    const response = await axios.post(
      "https://capstone-group-3-backend.onrender.com/api/expense",
      {
        amount,
        description,
        date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log("Income saved successfully:", response.data);
      Alert.alert("Success", "Expense saved successfully!");
    //Reset form
    setAmount('');
    setDescription('');
    setDate('');
    setSelectedDate('');


    console.log("API Response:", response.data);

    if (response.data.status === true) {
      router.navigate("/setting");
    } else {
      Alert.alert("Failed to add expense", response.data.message || "Unknown error");
    }
  } catch (error) {
    console.error("Error adding expense:", error.response?.data || error.message);
    Alert.alert("Error", "Failed to add expense. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <SafeAreaView>
      <ScrollView style={homeStyles.container}>
        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <MaterialIcons
                onPress={() => router.back("/account")}
                name="keyboard-backspace"
                size={24}
                color="white"
                style={{ position: "relative", left: 10 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "PoppinsBold",
                fontSize: 24,
                color: "white",
                position: "relative",
                right: 50,
              }}
            >
              Add New Expense
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "PoppinsRegular",
              fontSize: 20,
              textAlign: "center",
              color: "#D9D3D3",
            }}
          >
            Enter the details of the expense to help you track it better
          </Text>
        </View>

        <View style={homeStyles.loginbox1}>
          <View style={{ marginTop: 50, paddingHorizontal: 15 }}>
            <Text style={{fontFamily:'PoppinsRegular', fontSize:20}}>Enter Amount</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                style={{backgroundColor:COLORS.white, borderRadius:8, borderWidth: userFocus ? 1 : 0, borderColor: userFocus ? "#26A69A" : "transparent",}}
                placeholder="N1,000,000"
                placeholderTextColor={"#D9D9D9"}
                value={amount}
                onChangeText={setAmount}
                cursorColor={"#26A69A"}
                onFocus={() => {
                  setUserFocus(true);
                }}
                onBlur={() => {
                  setUserFocus(false);
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <Text style={{fontFamily:'PoppinsRegular', fontSize:20}}>Enter Description</Text>

            <View style={{ position: "relative" }}>
              <TextInput style={{backgroundColor:COLORS.white, borderRadius:8, borderWidth: userFocus ? 1 : 0, borderColor: userFocus ? "#26A69A" : "transparent",}}
                
                placeholder="Food"
                placeholderTextColor={"#D9D9D9"}
                value={description}
                onChangeText={setDescription}
                cursorColor={"#26A69A"}
                onFocus={() => {
                  setUserFocus(true);
                }}
                onBlur={() => {
                  setUserFocus(false);
                }}
              />
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.secondary,
                marginTop: 40,
                flexDirection: "row",
                justifyContent: "space-around",
                marginLeft: 15,
              }}
            >
              <Text style={[homeStyles.Mark, { textAlign: "left" }]}>Data</Text>
              <Text style={[homeStyles.Mark, { textAlign: "left" }]}>Food</Text>
              <Text style={[homeStyles.Mark, { textAlign: "left" }]}>Gift</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: COLORS.secondary,
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-around",
              marginLeft: 15,
            }}
          >
            <Text style={[homeStyles.Mark, { textAlign: "left" }]}>Data</Text>
            <Text style={[homeStyles.Mark, { textAlign: "left" }]}>Food</Text>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
                      <Text style={{
                        fontFamily: 'PoppinsRegular',
                        fontSize: 20,
                        color: '#000000',
                        paddingLeft: 15
                      }}>
                        Date
                      </Text>
          
                      <TouchableOpacity
                        onPress={() => setShowCalendar(!showCalendar)}
                        style={{
                          height: 45,
                          backgroundColor: COLORS.white,
                          borderRadius: 8,
                          justifyContent: 'center',
                          paddingLeft: 15,
                          borderWidth: 1,
                          borderColor: '#E0E0E0',
                        }}
                      >
                        <Text style={{ color: selectedDate ? '#000' : '#666' }}>
                          {selectedDate || 'Select Date'}
                        </Text>
                      </TouchableOpacity>
                      
                      {showCalendar && (
                        <View style={{ marginTop: 10 }}>
                          <Calendar
                            onDayPress={handleDateSelect}
                            markedDates={{
                              [selectedDate]: { selected: true, selectedColor: '#26A69A' }
                            }}
                            theme={{
                              selectedDayBackgroundColor: '#26A69A',
                              todayTextColor: '#26A69A',
                              arrowColor: '#26A69A',
                            }}
                          />
                        </View>
                      )}
                    </View>
            
          

          <View>
            <Button text={loading? "Adding Expense..." : 'Add Expense'}
              onPress={handleAddExpense}
              disable={loading}
              
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Expenses;
