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
        <View style={styles.imageView}>
          <Image style={{marginHorizontal:spacing[8],marginVertical:spacing[7]}}  source={require('../../assets/image/Vector.jpg')} />
        </View>
        <Text preset="h1"> Non-Contact </Text>
        <Text preset="h1">Deliveries</Text>
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
    marginTop:spacing[5],
    backgroundColor:colors.deepWhite,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    justifyContent: 'center',
    alignItems:'center'
  },
  imageView:{
    marginTop:spacing[5],
    backgroundColor:colors.white,
    width: 100,
    height: 100,
    borderRadius:'50%'
  }
})