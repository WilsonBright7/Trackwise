import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";
import { Calendar } from 'react-native-calendars';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import COLORS from "../../constants/Colors";
import homeStyles from "../style";
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

const Account = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [incomeSource, setIncomeSource] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const navigation = useNavigation();
  const [filename, setFilename] = useState('');
  const [file, setFile] = useState(null);
  const [fileUri, setFileUri] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
    setDate(day.dateString); // Store as string
  };

  const [items, setItems] = useState([
    { Label: "Salary", value: "salary" },
    { Label: "Freelancer", value: "freelance" },
    { Label: "Bonus", value: "bonus" },
  ]);

  const [token, setToken] = useState('');

  useEffect(() => {
    const getDataFromStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userData");
        if (jsonValue != null) {
          const parsedData = JSON.parse(jsonValue);
          setToken(parsedData?.token || '');
          console.log("Retrieved data:", parsedData);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };
    getDataFromStorage();
  }, []);

  // Request permissions on component mount
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Sorry, we need camera roll permissions to make this work!');
      }
    };
    requestPermissions();
  }, []);

  const handlePickFile = async () => {
    Alert.alert(
      "Select File",
      "Choose file type",
      [
        {
          text: "Document",
          onPress: pickDocument,
        },
        {
          text: "Image",
          onPress: pickImage,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedFile = result.assets[0];
        setFile(selectedFile);
        setFilename(selectedFile.name);
        setFileUri(selectedFile.uri);
        console.log('Document selected:', selectedFile);
      }
    } catch (err) {
      console.error('Error picking document:', err);
      Alert.alert('Error', 'Failed to pick document');
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        const imageFile = {
          uri: selectedImage.uri,
          type: selectedImage.type || 'image/jpeg',
          name: selectedImage.fileName || `image_${Date.now()}.jpg`,
          size: selectedImage.fileSize,
        };
        
        setFile(imageFile);
        setFilename(imageFile.name);
        setFileUri(imageFile.uri);
        console.log('Image selected:', imageFile);
      }
    } catch (err) {
      console.error('Error picking image:', err);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const removeFile = () => {
    setFile(null);
    setFilename('');
    setFileUri('');
  };

  const handleSaveIncome = async () => {
    console.log("Fetched token:", token);

    // Validation
    if (!incomeSource || !date || !amount) {
      Alert.alert("Error", "Please fill in all required fields (Source, Date, Amount)");
      return;
    }

    if (!token) {
      Alert.alert("Error", "Authentication token not found. Please login again.");
      return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append('incomeAmount', amount.toString());
    formData.append('sourceOfIncome', incomeSource);
    formData.append('date', date);
    if (description) formData.append('description', description);
    formData.append('isRecurring', isChecked.toString());

    // Add file if selected
    if (file) {
      formData.append('filename', {
        filename: file.name,
      });
    }

    // Debug FormData contents
    console.log("FormData contents:");
    console.log("- incomeAmount:", amount);
    console.log("- sourceOfIncome:", incomeSource);
    console.log("- date:", date);
    console.log("- description:", description);
    console.log("- isRecurring:", isChecked);
    console.log("- file:", file ? file.name : 'No file');

    try {
      console.log("Sending income data to API...");

      const response = await axios.post(
        "https://capstone-group-3-backend.onrender.com/api/income",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },

        }
      );

      console.log("Income saved successfully:", response.data);
      Alert.alert("Success", "Income saved successfully!");
      
      // Reset form
      setIncomeSource('');
      setDate('');
      setSelectedDate('');
      setDescription('');
      setAmount('');
      setChecked(false);
      setFile(null);
      setFilename('');
      setFileUri('');
      
      navigation.navigate("expense");
    } catch (error) {
      console.error("Failed to save income:", error);
      
      if (error.response) {
        // Server responded with error status
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        Alert.alert("Error", `Failed to save income: ${error.response.data?.message || 'Server error'}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        Alert.alert("Error", "No response from server. Please check your internet connection.");
      } else {
        // Something else happened
        console.error("Request setup error:", error.message);
        Alert.alert("Error", "Failed to save income. Please try again.");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={homeStyles.container}>
        <View
          style={{
            marginVertical: -20,
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
            <Text style={homeStyles.Text}>Source of Income</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  height: 45,
                  paddingLeft: 10,
                  backgroundColor: COLORS.white,
                  borderRadius: 8,
                  borderWidth: userFocus ? 1 : 0,
                  borderColor: userFocus ? "#26A69A" : "transparent",
                }}
                placeholder="e.g., Salary, Freelance, Business"
                placeholderTextColor={"#666"}
                value={incomeSource}
                onChangeText={setIncomeSource}
                cursorColor={"#26A69A"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </View>
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

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={homeStyles.Text}>Enter Description</Text>
              <Text
                style={{
                  fontFamily: "InterBold",
                  fontSize: 16,
                  color: "#D9D9D9",
                }}
              >
                (Optional)
              </Text>
            </View>

            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  height: 45,
                  paddingLeft: 10,
                  backgroundColor: COLORS.white,
                  borderRadius: 8,
                  borderWidth: userFocus ? 1 : 0,
                  borderColor: userFocus ? "#26A69A" : "transparent",
                }}
                placeholder="Brief description of income"
                placeholderTextColor={"#666"}
                value={description}
                onChangeText={setDescription}
                cursorColor={"#26A69A"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <Text style={homeStyles.Text}>Amount</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  height: 45,
                  paddingLeft: 10,
                  backgroundColor: COLORS.white,
                  borderRadius: 8,
                  borderWidth: userFocus ? 1 : 0,
                  borderColor: userFocus ? "#26A69A" : "transparent",
                }}
                placeholder="100000"
                placeholderTextColor={"#666"}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                cursorColor={"#26A69A"}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={homeStyles.Text}>Mark as recurring?</Text>
              <Checkbox 
                value={isChecked} 
                onValueChange={setChecked}
                color={isChecked ? '#26A69A' : undefined}
              />
            </View>
          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <Text style={homeStyles.Text}>Attachment</Text>
            
            {!file ? (
              <TouchableOpacity
                onPress={handlePickFile}
                style={{
                  height: 45,
                  backgroundColor: COLORS.white,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderColor: '#E0E0E0',
                  borderStyle: 'dashed',
                }}
              >
                <MaterialCommunityIcons
                  name="plus-box-outline"
                  size={24}
                  color="#666"
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: '#666' }}>Add Attachment</Text>
              </TouchableOpacity>
            ) : (
              <View style={{
                backgroundColor: COLORS.white,
                borderRadius: 8,
                padding: 10,
                borderWidth: 1,
                borderColor: '#26A69A',
              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }} numberOfLines={1}>
                      {filename}
                    </Text>
                    <Text style={{ color: '#666', fontSize: 12 }}>
                      {file.type || 'Unknown type'}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={removeFile}>
                    <MaterialCommunityIcons name="close" size={20} color="#666" />
                  </TouchableOpacity>
                </View>
                
                {fileUri && file.type && file.type.startsWith('image/') && (
                  <Image
                    source={{ uri: fileUri }}
                    style={{
                      width: '100%',
                      height: 100,
                      marginTop: 10,
                      borderRadius: 5,
                      resizeMode: 'cover',
                    }}
                  />
                )}
              </View>
            )}
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 15, paddingBottom: 30 }}>
            <Button
              onPress={handleSaveIncome}
              text={"Save Income"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;