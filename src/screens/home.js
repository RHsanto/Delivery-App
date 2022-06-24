import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/color";
import { spacing } from "../theme/spacing";

import { typography } from "../theme/typography";

export default function Home(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
       <View style={styles.logoView}><Text style={styles.logo}>D</Text></View>
      <View style={styles.orderView}>
        <Text preset="h3">
        Hello World
        </Text>
        <Text preset="h3">
        Hello World
        </Text>
        <Text preset="h3">
        Hello World
        </Text>
    </View>
     </View>
 {/* order delivery section */}
  
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.purple,
  },
  logoView:{
   marginLeft:spacing[7],
   marginVertical:spacing[10],
   backgroundColor:colors.lightGreen,
   borderRadius:50,
   width: 70,
   height: 70,
  },
  logo:{
    color:colors.logoColor,
    fontSize:34,
    textAlign:'center',
    marginTop:spacing[4]
  
  },
  orderView:{ 
    marginTop:spacing[8],
    backgroundColor:colors.deepWhite,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    justifyContent: 'center',
    alignItems:'center'
  }
})