import { StyleSheet } from "react-native";
import COLORS from "../constants/Colors";

const homeStyles = StyleSheet.create({
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
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  loginBox: {
    backgroundColor: COLORS.secondaryBackground,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flex: 1,
    marginTop: 40,
    minHeight: "50%",
  },
  Box: {
    height: 46,
    width: 320,
    backgroundColor: COLORS.primary,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 29,
    alignItems: "center",
  },
  graphcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 120,
    marginTop: 20,
  },
  barcontainer: {
    alignItems: "center",
  },
  bar: {
    width: 26.5,
    borderRadius: 5,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: "black",
  },
  Line: {
    height: 2,
    backgroundColor: COLORS.primary,
    //marginVertical:5,
    marginTop: 15,
  },
  Input: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    paddingLeft: 15,
    gap: 15,
  },
  Text: {
    fontFamily: "PoppinsRegular",
    fontSize: 20,
    marginHorizontal: 15,
    gap: 15,
  },
  Mark: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 19,
    gap: 15,
    color: COLORS.white,
    width: 86,
    height: 38,
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  loginbox1: {
    backgroundColor: COLORS.secondaryBackground,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingBottom: 20,
    //flex:1,
    marginTop: 5,
    minHeight: "50%",
  },
  Fit: {
    borderWidth: 2,
    height: 38,
    borderRadius: 6,
    borderColor: "#000000",
    paddingLeft: 5,
  },

  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  in: {
    width: 130,
    height: 38,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  recentContainer: {
    marginBottom: 20,
    backgroundColor: COLORS.secondaryBackground
  },
  recentTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  expenseText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  expenseCost: {
    fontWeight: "bold",
    fontSize: 14,
  },
  expenseDate: {
    marginLeft: 10,
    fontSize: 12,
    color: "#666",
  },
  viewList: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navText: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default homeStyles;
export default styles;
