import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Text from "../components/text/text";

export default function Details(){
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.backBtn}>
      <Text >
      <AntDesign name="leftcircle" size={24} color="black" />
        Hello Details
      </Text>
      
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
  backBtn:{
    
    justifyContent:'center',
    alignItems:'center'
  }
})