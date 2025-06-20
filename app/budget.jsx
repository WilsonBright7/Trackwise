import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Button from "../components/Button";


const Budget = ()=>{

    const [userFocus, setUserFocus] = useState(false);

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}> 
                <View style={{marginVertical:40}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>        
                <TouchableOpacity>
        <MaterialIcons onPress={()=>router.back('/expense')} 
        name="keyboard-backspace" size={24} color="white" style={{paddingLeft:10}} />
        </TouchableOpacity>    
                <Text style={{fontFamily:'PoppinsBold', fontSize:24, textAlign:'center', 
                  paddingRight:100,  color:'white'}}>Create Budget</Text>
                </View>
                </View>
                <View style={styles.loginbox1}>
                    <View style={{marginTop:20, padding:10}}>
                        <Text style={{fontFamily:'PoppinsRegular', fontSize:20 }}>Total Allocation Vs. Budget</Text>
                        <Text style={styles.Mark}></Text>
                    </View>
                    <View style={{marginTop:30, padding:10}}>
                        <Text style={{fontFamily:'PoppinsRegular', fontSize:20}}>Category</Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, paddingHorizontal:10}}>
                        <Image style={{width:105, height:40}} source={require('../assets/images/Food.png')}/>
                        <TextInput style={{width:100, height:38, borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                           backgroundColor:'red', borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}></TextInput>      
                  
                
                </View>

                 <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, marginBottom:10}}>
                        <Image style={{width:135, height:40, paddingRight:10}} source={require('../assets/images/House.png')}/>
                        <TextInput style={{width:100, height:38, backgroundColor:'red', borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View> 

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, padding:10}}>
                        <Image style={{width:140, height:40}} source={require('../assets/images/Cloth.png')}/>
                        <TextInput style={{width:100, height:38, backgroundColor:'red', borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View> 

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, padding:10}}>
                        <Image style={{width:105, height:44}} source={require('../assets/images/Fuel.png')}/>
                        <TextInput style={{width:100, height:38,backgroundColor:'red', borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, padding:10}}>
                        <Image style={{width:165, height:44}} source={require('../assets/images/Electric.png')}/>
                        <TextInput style={{width:100, height:38, backgroundColor:'red', borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View> 

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, padding:10}}>
                        <Image style={{width:150, height:45}} source={require('../assets/images/Internet.png')}/>
                        <TextInput style={{width:100, height:38, 
                            borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View> 

                 <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, padding:10}}>
                        <Image style={{width:210, height:42}} source={require('../assets/images/Entertain.png')}/>
                        <TextInput style={{width:100, height:38, borderWidth:userFocus ? 1 : 0 , borderColor: userFocus ? "#26A69A": 'transparent',
                            borderRadius:10}}
                            cursorColor={'#26A69A'}
                  onFocus={()=>{
                     setUserFocus(true)
                  }}
                  onBlur={()=>{
                      setUserFocus(false) 
                  }}      
                  
                />
                </View> 
                <View style={{flexDirection:'row', padding:10,  justifyContent:'flex-end'}}>
                <AntDesign name="pluscircleo" size={40} color="#26A69A" />
                </View>
                <View>
                    <Button onPress={()=>{
                        router.navigate('/setting')
                    }} 
                    text={'Set Budget'}/>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Budget;