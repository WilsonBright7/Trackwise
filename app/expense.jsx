import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import styles from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import { useState } from "react";
import COLORS from "../constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Button from "../components/Button";
//import DateTimePicker from '@react-native-community/datetimepicker';


const Expenses = () => {
    
    const [userFocus, setUserFocus] = useState(false);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false)

    return(

        <SafeAreaView>

            <ScrollView style={styles.container}>

            <View style={{marginVertical:20}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
            <TouchableOpacity>
        <MaterialIcons onPress={()=>router.back('/account')} 
        name="keyboard-backspace" size={24} color="white" style={{position:'relative', left:10}} />
        </TouchableOpacity>
                <Text style={{fontFamily:'PoppinsBold', fontSize:24, color:'white',
                    position:'relative', right:50}}>Add New Expense</Text>
            </View>
                <Text style={{fontFamily:'PoppinsRegular', fontSize:20, textAlign:'center', color:'#D9D3D3'}}>Enter the details of the expense to help you track it better</Text>    
            </View>

            <View style={styles.loginbox1}>
            <View style={{marginTop:50, paddingHorizontal:15, }}>
                <Text style={styles.Text}>Enter Amount</Text>
                
                <View style={{position:'relative'}}>
                <TextInput style={[styles.Input, {borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent'}]}
                  placeholder="N1,000,000"  placeholderTextColor={'#D9D9D9'}
                  cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View>
                 
            </View>

            <View style={{marginTop:30, paddingHorizontal:15, }}>
                <Text style={styles.Text}>Enter Description</Text>
                
                <View style={{position:'relative'}}>
                <TextInput style={[styles.Input, {borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',  } ]}
                  placeholder="Food"  placeholderTextColor={'#D9D9D9'}
                  cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View>
                 
            </View>
                  <TouchableOpacity>
                  <View style={{backgroundColor:COLORS.secondary, marginTop:40, flexDirection:'row', 
                   justifyContent:'space-around', marginLeft:15}}>
                    <Text style={[styles.Mark,{textAlign:'left'}]}>Data</Text>
                    <Text style={[styles.Mark,{textAlign:'left'}]}>Food</Text>
                    <Text style={[styles.Mark,{textAlign:'left'}]}>Gift</Text>
                  </View>
                  </TouchableOpacity>

                  <View style={{backgroundColor:COLORS.secondary, marginTop:40, flexDirection:'row', 
                   justifyContent:'space-around', marginLeft:15}}>
                    <Text style={[styles.Mark,{textAlign:'left'}]}>Data</Text>
                    <Text style={[styles.Mark,{textAlign:'left'}]}>Food</Text>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </View>

                  <View style={{marginTop:30, paddingHorizontal:15, }}>
                <Text style={styles.Text}>Date</Text>
                
                <View style={{position:'relative'}}>
                <TextInput 
                style={[styles.Input, {borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',  } ]}
                  placeholder="June 12th, 2025"  placeholderTextColor={'#D9D9D9'}
                  cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                <FontAwesome6 name="calendar-days" size={24}   
                color="#000000"
                style={{
                    position:'absolute',
                    right:10,
                    top: 7,
                }}
                />
                </View>
                 
            </View>

            <View>
                <Button onPress={()=>{
                    router.navigate('/budget')
                }} 
                text={'Add Expense'}/>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Expenses;
