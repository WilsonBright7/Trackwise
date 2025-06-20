import COLORS from '@/constants/Colors';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import styles from '../styles';
import { Button } from '@react-navigation/elements';
import { router } from 'expo-router';
import {BarChart, PieChart} from "react-native-gifted-charts";
import AsyncStorage from '@react-native-async-storage/async-storage';


const barData=[
    {value:250, label: "Food", frontColor:'#0263FF'}, 
    {value:500, label: 'Transport', frontColor: '#FF7723'}, 
    {value:745, label:'Data', frontColor: '#C07D65'}, 
    {value:320, label:'Rent', frontColor: '#C07D65'},
    {value:600, label:'Saving', frontColor: '#197B01'}]

const Home = () => {
    const userdata = AsyncStorage.getItem('userData')
    console.log('userdate', userdata)
  return (
    <SafeAreaView >
        <ScrollView style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:15, marginHorizontal:15}}>
            <Image style={{width:50, height:50}} source={require('../../assets/images/pix.png')}/>
            <Image style={{width:50, height:50}} source={require('../../assets/images/bell.png')}/>
            </View>
        <View style={{alignItems:'center'}}>    
        <Text style={{color:COLORS.white, fontFamily:'PoppinsBold', fontSize:20}}>Good afternoon Halima!</Text>
        <Text style={{color:COLORS.white, fontFamily:'PoppinsSemi'}}>20 days left for this month</Text>
        </View>
        <View style={styles.loginBox}>
        <View style={{flexDirection:'row', justifyContent:"space-between", marginBlock:-35, marginHorizontal:10 }}>
        <Image style={{width:154.93, height:88, marginHorizontal:15}} source={require('../../assets/images/card1.png')}/>
        <Image  style={{width:154.93, height:88, }} source={require('../../assets/images/card2.png')}/>
        </View>
        <View style={styles.Box}>
            <Text style={{fontFamily:'PoppinsSemiBold', fontSize:20, color:COLORS.white }}>Month</Text>
            <Text style={{fontFamily:'PoppinsSemiBold', fontSize:20, color:COLORS.white}}>Statistics</Text>
        </View>
    <View style={{marginTop:30}}>

    </View>
        <View>
            <BarChart
            barWidth={39}
            noOfSections={5}
            barBorderRadius={4}
            //frontColor=,
            data = {barData}
            isAnimated
            yAxisThickness={0.5}
            xAxisThickness={1}
            showXAxisIndices={true} />
              
    </View>
        
        {/* <View style={[styles.graphcontainer,{marginTop:30}]}>
        <View style={styles.barcontainer}></View>
        <View style={[styles.bar,{height:68.41, backgroundColor:'#0263FF',}]}></View>
        <Text style={styles.label}>Food</Text>

        <View style={styles.barcontainer}></View>
        <View style={[styles.bar,{height:128.05, backgroundColor:'#FF7723'}]}></View>
        <Text style={styles.label}>Transport</Text>

        <View style={styles.barcontainer}></View>
        <View style={[styles.bar,{height:85.07, backgroundColor:'#8E30FF',}]}></View>
        <Text style={styles.label}>Data</Text>

        <View style={styles.barcontainer}></View>
        <View style={[styles.bar,{height:68.07, backgroundColor:'#C07D65',}]}></View>
        <Text style={styles.label}>Rent</Text>

        
        <View style={styles.barcontainer}></View>
        <View style={[styles.bar,{height:111.17, backgroundColor:'#197B01',}]}></View>
        <Text style={styles.label}>Savings</Text>
        </View> */}
        <View style={{alignSelf:'center', marginTop:40}}>
        <TouchableOpacity onPress={()=>{
            router.navigate('/account')
        }}
        style={{backgroundColor:COLORS.primary, width:200, height:50, borderRadius:20, justifyContent:'center'}}>
            <Text style={{fontFamily:'PoppinsSemiBold', fontSize:20, color:COLORS.white, textAlign:'center'}}>Add Savings +</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Line}></View>
        <Text style={{fontFamily:'PoppinsSemiBold', fontSize:14, color:COLORS.primary, marginTop:20, marginHorizontal:10}}>Recent Expenses</Text>
        </View>
        
            
        
        </ScrollView>
      
    </SafeAreaView>
   
  )
}
export default Home;