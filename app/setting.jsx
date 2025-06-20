import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";


const Setting = ()=> {
    return(
        <SafeAreaView style={[styles.container, {flex:1}]}>
        <ScrollView >
            <Text>
            This is my Setting Screen
            </Text>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Setting;