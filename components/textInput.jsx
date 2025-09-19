import { View, TextInput, Image } from "react-native";
import COLORS from "../constants/Colors";

const BudgetItem = ({ icon, focus, setFocus }) => (
  <View style={{ flexDirection: "row", marginBottom: 10, padding: 10 , justifyContent:'space-between'}}>
    <Image
      style={{ width: 40, height: 40, marginRight: 10 }}
      source={icon}
      resizeMode="contain"
    />
    <TextInput
      placeholder="#20,000"
      placeholderTextColor={COLORS.greyText}
      style={{
        width: 100,
        height: 38,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flex: 1,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: focus ? COLORS.primary : COLORS.greyText,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#FAFAFA",
      }}
      cursorColor={COLORS.primary}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  </View>
);

export default BudgetItem;
