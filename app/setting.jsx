import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableOpacity } from "react-native";
import COLORS from "../constants/Colors";


const Setting = ()=> {
    return(
        <SafeAreaView style={{backgroundColor:COLORS.secondary, flex:1}}>
        <ScrollView >
            <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
            <Image 
                style={{width:77, height:77,}}
                source={require('../assets/images/eclipse.png')}/>
                
                <Text style={{fontFamily:'PoppinsBold', fontSize:24, color:COLORS.primary, 
                   position:'absolute', right:129, alignSelf:'center'}}> Settings</Text>
            </View>

            <View style={{width:374, height:113.74, backgroundColor:COLORS.primary, borderRadius:15,
                marginTop:30, justifyContent:'center', alignSelf:'center'
            }}>
                <Text style={{paddingLeft:70, fontFamily:'PoppinsBold', fontSize:20, color:COLORS.white}}>Name</Text>
                <Image resizeMode='contain' source={require('../assets/images/Vector.png')}
                style={{width:37.5, height:36.15, paddingLeft:70}} />
                <Text style={{paddingLeft:70, fontFamily:'PoppinsRegular', fontSize:20, color:COLORS.white}}>Occupation</Text>
            </View>
            
            <View>
                <Text style={{fontFamily:'PoppinsBold', fontSize:20, color:'#D9D9D9',
                    paddingLeft:54, marginTop:25
                }}>Security and privacy</Text>
                </View>


            <View style={{width:374, height:113.74, backgroundColor:COLORS.primary,
                 borderRadius:15, justifyContent:'center', alignSelf:'center', marginTop:9}}>
                
                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:19.64, height:19.64, tintColor:'white', paddingLeft:70}}
                source={require('../assets/images/padlock.png')}/>
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20, color:COLORS.white}}>Password</Text>
                <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:180}} />    
                </View>

                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:19.64, height:19.64, tintColor:'white', paddingLeft:70, marginTop:30,}}
                source={require('../assets/images/padlock.png')} />
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20,
                    marginTop:30, color:COLORS.white}}>Login option</Text>
                    <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:152, marginTop:30}} /> 
                </View>
           </View>

           <View>
                <Text style={{fontFamily:'PoppinsBold', fontSize:20, color:'#D9D9D9',
                    paddingLeft:54, marginTop:25
                }}>Expense category</Text>
                </View>
                <View style={{width:374, height:113.74, backgroundColor:COLORS.primary,
                 borderRadius:15, justifyContent:'center', alignSelf:'center', marginTop:9}}>
                
                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:29.03, height:26, tintColor:'white', paddingLeft:70}}
                source={require('../assets/images/exp1.png')}/>
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20, color:COLORS.white}}>Customized Expense</Text>
                <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:60}} />    
                </View>

                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:30, height:26, tintColor:'white', paddingLeft:70, marginTop:30,}}
                source={require('../assets/images/exp2.png')} />
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20,
                    marginTop:30, color:COLORS.white}}>Export Data</Text>
                    <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:152, marginTop:30}} /> 
                </View>
           </View>


           <View>
                <Text style={{fontFamily:'PoppinsBold', fontSize:20, color:'#D9D9D9',
                    paddingLeft:54, marginTop:25
                }}>Apps and devices</Text>
                </View>
                <View style={{width:374, height:113.74, backgroundColor:COLORS.primary,
                 borderRadius:15, justifyContent:'center', alignSelf:'center', marginTop:9}}>
                
                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:20, height:22.63, tintColor:'white', paddingLeft:70}}
                source={require('../assets/images/no1.png')}/>
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20, color:COLORS.white}}>Notification</Text>
                <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:148}} />    
                </View>

                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:23.56, height:23.56, tintColor:'white', paddingLeft:70, marginTop:30,}}
                source={require('../assets/images/no2.png')} />
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20,
                    marginTop:30, color:COLORS.white}}>Dark mode</Text>
                    <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:152, marginTop:30}} /> 
                </View>
           </View>

           <View>
                <Text style={{fontFamily:'PoppinsBold', fontSize:20, color:'#D9D9D9',
                    paddingLeft:54, marginTop:25
                }}>Others</Text>
                </View>
                <View style={{width:374, height:113.74, backgroundColor:COLORS.primary,
                 borderRadius:15, justifyContent:'center', alignSelf:'center', marginTop:9}}>
                
                <View style={{flexDirection:'row', marginTop:40}}>
                <Image resizeMode='contain'
                style={{width:24, height:23.11, tintColor:'white', paddingLeft:70}}
                source={require('../assets/images/la1.png')}/>
                <Text style={{paddingLeft:3, fontFamily:'PoppinsRegular', fontSize:20, color:COLORS.white}}>Language</Text>
                <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:148}} />    
                </View>

                <View style={{flexDirection:'row'}}>
                <Image resizeMode='contain'
                style={{width:24, height:23.11, tintColor:'white', paddingLeft:70, marginTop:30,}}
                source={require('../assets/images/no2.png')} />
                <TouchableOpacity style={{marginTop:30,}}>
                <Text style={{paddingLeft:3, fontFamily:'PoppinsBold', fontSize:20,
                     color:'red'}}>Delete Account</Text>
                    <AntDesign name="right" size={10} color="white" onPress={()=>{
                    navigate.next
                }} 
                style={{alignSelf:'center', position:'relative', left:152, marginTop:30}} /> 
                </TouchableOpacity>
                </View>
           </View>
        


        </ScrollView>
        </SafeAreaView>
    )
}

export default Setting;


