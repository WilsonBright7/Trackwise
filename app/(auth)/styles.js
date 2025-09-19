import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/Colors';



const authStyles = StyleSheet.create({

     mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
   
  },
  Container: {
    marginTop: 60,

  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap:8
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.white,
    fontFamily: 'PoppinsBold'
  },
  logoContainer: {
    paddingHorizontal: 20,
    marginTop:10
  },
  logo: {
    width: 116, 
    height: 93,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.white, 
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    padding: 25,
    paddingTop: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily:'PoppinsMedium',
    alignItems:'center',
    marginLeft:30
  },
  inputWrapper: {
    flexDirection: 'row',
    alignContent:'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 65,
    
  },
  inputLogin: {
    fontSize: 22,
    fontFamily:'PoppinsMedium',
    marginLeft: 40,
    marginVertical: 10,
    marginBottom:15

  },
  input: {
    flex: 1,
    height: 65,
    fontSize: 16,
    borderWidth:1,
    borderColor:COLORS.greyText,
    borderRadius:15,
    fontFamily:'PoppinsMedium',
    paddingLeft:60
    
    
  },
  passwordVisibilityToggle: {
    padding: 10,
  },
  termsAndForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
    width: 20,
    height: 20,
  },
  termsText: {
    color: '#fff',
    fontSize: 20,
    
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily:'PoppinsRegular',
    alignSelf:'flex-end',
    marginVertical:10
  },
  signInButton: {
    backgroundColor: '#F58634', // Orange color for Sign In button
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#00000',
    fontSize: 16,
    marginVertical:15,
    fontFamily:'PoppinsRegular',
  },
  signUpLink: {
    color: '#0033FF', // Yellowish color for "Sign up" link
    fontSize: 16,
    fontFamily:'PoppinsRegular',
    alignSelf:'center'
  },
  googleSignInContainer: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  googleSignInButton: {
    backgroundColor: '#fff', // White background for Google button
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal:20,
    justifyContent: 'center',
    alignContent:'center',
    shadowColor: '#000',
    width: '100%',
  },
  googleLogo: {
    width: 50,
    height: 50,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#D9D9D9',
  },
  googleSignInButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },

  
})

export default authStyles;