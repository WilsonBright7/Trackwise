import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar } from 'react-native-calendars';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import COLORS from "../../constants/Colors";
import homeStyles from "../style";


const Account = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [incomeSource, setIncomeSource] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [wallet, setWallet] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    
    const handleDateSelect = (day)=> {
      setSelectedDate(day.dateString);
      setShowCalendar(false);
    }
   
  
  const [items, setItems] = useState([
    { Label: "Salary", value: "salary" },
    { Label: "Freelancer", value: "freelance" },
    { Label: "Bonus", value: "bonus" },
  ]);

  const handleSaveIncome = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("Fetched token:", token);

    const data = {
      source: incomeSource,
      description: description,
      date: date,
      wallet: wallet,
      recurring: isRecurring,
    };

    try {
      console.log("Sending income data", data);

      const response = await axios.post(
        "https://capstone-group-3-backend.onrender.com/api/income",
        data,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMmIyNzcwNWUtYWU4OS00OTRkLTg0MzItODM0M2UzYWY4Y2I2IiwiZW1haWwiOiJlbmdyY2hhcmxlczMzQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiTWljaGFlbCJ9LCJpYXQiOjE3NTAwNjY2OTUsImV4cCI6MTc1MDA3MDI5NX0.vxcZuNyYaK_Pj13B-UGKXvouNRXlCe6weSN5zTO77AY",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Income saved:", response.data);

      navigation.navigate("expense");
    } catch (error) {
      console.error("Failed:", error.response?.data);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={homeStyles.container}>
        <View
          style={{
            marginVertical: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              onPress={() => router.back("/home")}
              name="arrow-back"
              size={24}
              color="white"
              style={{ position: "relative", left: 10 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 24,
              color: COLORS.white,
              position: "absolute",
              right: 110,
            }}
          >
            Add Income
          </Text>
        </View>

        <View style={homeStyles.loginbox1}>
          <View style={{ marginTop: 50, paddingHorizontal: 15 }}>
            <Text style={homeStyles.Text}>Income Source</Text>

            <View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholderTextColor={"#D9D9D9"}
                placeholder="Income Source"
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <Text style={{fontFamily:'PoppinsRegular', fontSize:20, color:'#000000', paddingLeft:15}}>Date</Text>

            
            <TouchableOpacity
            onPress={()=>setShowCalendar(!showCalendar)}>
              <Text style={{color:COLORS.white, paddingLeft:15}}>{selectedDate || 'Select Date'}</Text>
            </TouchableOpacity>
            {showCalendar && (<Calendar
              onDayPress={handleDateSelect} />
            )}
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={homeStyles.Text}>Enter Description</Text>
              <Text
                style={{
                  fontFamily: "InterBold",
                  fontSize: 20,
                  color: "#D9D9D9",
                }}
              >
                (Optional)
              </Text>
            </View>

            <View style={{ position: "relative" }}>
              <TextInput
                style={[
                  homeStyles.Input,
                  {
                    borderWidth: userFocus ? 1 : 0,
                    borderColor: userFocus ? "#26A69A" : "transparent",
                  },
                ]}
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

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <Text style={homeStyles.Text}>Add to Wallet</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                style={[
                  homeStyles.Input,
                  {
                    borderWidth: userFocus ? 1 : 0,
                    borderColor: userFocus ? "#26A69A" : "transparent",
                  },
                ]}
                placeholder="Business Wallet"
                placeholderTextColor={"#D9D9D9"}
                value={wallet}
                onChangeText={setWallet}
                cursorColor={"#26A69A"}
                onFocus={() => {
                  setUserFocus(true);
                }}
                onBlur={() => {
                  setUserFocus(false);
                }}
              />
              <MaterialIcons
                name="keyboard-arrow-down"
                size={45}
                color="#000000"
                style={{
                  position: "absolute",
                  right: 10,
                  top: -1,
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={homeStyles.Text}>Mark as recurring?</Text>
              <Checkbox value={isChecked} onValueChange={setChecked} />
            </View>

            <View style={{ position: "relative" }}>
              <TextInput
                style={[
                  homeStyles.Mark,
                  {
                    borderWidth: userFocus ? 1 : 0,
                    borderColor: userFocus ? "#26A69A" : "transparent",
                  },
                ]}
                placeholder="Add Attachment"
                placeholderTextColor={"#D9D9D9"}
                value={isRecurring}
                onValueChange={setIsRecurring}
                cursorColor={"#26A69A"}
                onFocus={() => {
                  setUserFocus(true);
                }}
                onBlur={() => {
                  setUserFocus(false);
                }}
              />
              <MaterialCommunityIcons
                name="plus-box-outline"
                size={24}
                color="#000000"
                style={{
                  position: "absolute",
                  left: 10,
                  top: 10,
                }}
              />
            </View>
          </View>

          <View>
            <Button
              onPress={() => {
                router.navigate("/expense");
              }}
              text={"Save Income"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Account;
