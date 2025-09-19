import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from '../constants/Colors'
const Button = ({text, onPress, loading, disable})=>{
    return(
        
        <TouchableOpacity onPress={onPress} disabled={disable || loading} style={{height:60, 
            backgroundColor:COLORS.primary, 
             borderRadius:15,
            justifyContent:'center'}}>

                {loading ? (
                    <ActivityIndicator color={COLORS.white}/>
                ) : (

                    <Text style={{textAlign:'center', 
                color:COLORS.white,
                fontFamily:'PoppinsBold', 
            fontSize:20, fontWeight:400}}>{text}</Text>

                )}
           
            
        </TouchableOpacity>
    
    )


}
export default Button;