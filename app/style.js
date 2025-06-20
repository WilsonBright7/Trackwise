import { StyleSheet } from 'react-native';
import COLORS from '../constants/Colors';


const styles = StyleSheet.create({
    container: {
      backgroundColor:COLORS.primary,
        
    },
    loginBox: {
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingBottom: 50,
        flex:1,
        marginTop:40,
        minHeight:'50%',
        shadowOffset:{width:0, height:4},
        
    },
    Box:{
        height:46,
        width:368,
        backgroundColor:COLORS.primary,
        marginTop:60, 
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
        marginHorizontal:5,
        borderRadius:20,
        alignItems:'center'
    },
    graphcontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        height:120,
        marginTop:20,
    },
    barcontainer:{
        alignItems:'center',
    },
    bar:{
        width:26.5,
        borderRadius:5,
    },
    label:{
        marginTop:5,
        fontSize:12,
        color:'black'
    },
    Line:{
        height:3,
        width:440,
        backgroundColor:COLORS.primary,
        //marginVertical:5,
        marginTop:20
    },
    Input:{
        borderWidth:2,
        borderColor:'#000000',
        borderRadius: 10,
        paddingLeft:15,
        gap:15
        
    },
    Text:{
        fontFamily:'PoppinsRegular',
        fontSize:20, 
        marginHorizontal:15,
        gap:15,
    },
    Mark:{
        borderWidth:2,
        borderColor:'#000000',
        borderRadius:8,
        paddingLeft:45,
        gap:15,
    },
    loginbox1:{
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingBottom: 5,
        //flex:1,
        marginTop:5,
        minHeight:'50%',
        shadowOffset:{width:0, height:4},
    },
    Fit:{
        borderWidth:2,
        height:38,
        borderRadius:6,
        borderColor:'#000000',
        paddingLeft:5,
    },
    
    safe:{
        flex:1,
        backgroundColor: COLORS.white,
       
      },
      
      
    });



export default styles;