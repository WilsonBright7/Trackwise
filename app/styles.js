import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor: COLORS.white,
   
  },
  formContainer: {
    backgroundColor: COLORS.secondaryBackground, 
    borderBottomRightRadius: 65,
    borderBottomLeftRadius: 65,
    padding: 44,
  },
  onboard:{
    backgroundColor: COLORS.secondaryBackground,
    flex:1,
    padding:24
  },
  image: {
    width: width * 0.6,
    height: height * 0.3,
    marginVertical:40,
    alignSelf:'center',
    borderRadius:53
  },
  title: {
    fontSize: 30,
    fontFamily:'PoppinsRegular',
    color: COLORS.primary,
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: 'PoppinsRegular',
    marginTop:20
  },
  subtitlle2: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
  },

  sign:{
    textAlign: "center", 
    fontSize: 20, 
    fontWeight:400, 
    fontFamily:'PoppinsBold', 
    color: COLORS.white
  },
  second:{
    height:56, 
    width:142,
    backgroundColor:COLORS.primary, 
    borderRadius:15,
    justifyContent:'center'
  }
  
});

export default styles;