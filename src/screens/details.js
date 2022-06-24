import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View,StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Text from "../components/text/text";
import { colors } from "../theme/color";
import { spacing } from "../theme/spacing";

export default function Details(){
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
    

    <View>
     <Image style={{height:220}} source={require('../../assets/image/Media.jpg')} />
    <View style={styles.priceContainer}>
      <View style={styles.textView}>
      <Text preset="h2">Boston Lettuce</Text>
      <View style={styles.price}>
      <Text preset="h1">1.10</Text>
      <Text style={styles.currency}>€ / piece</Text>
      </View>
      <Text preset="h4" style={styles.subPRice}>~ 150 gr / piece</Text>
      <Text>jhdopjoj</Text>
      <Text>jhdopjoj</Text>
      </View>
      
    </View>
    </View>


      </ScrollView>
    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
  backBtn:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:20
  },
  priceContainer:{
    backgroundColor:colors.deepWhite,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:-20,
  },
  textView:{
paddingTop:spacing[7],
paddingHorizontal:spacing[6]
  },
  price:{
    flexDirection:'row',
    marginTop:spacing[4],
    alignItems:'center'
  },
  currency:{
    fontSize:30,
    fontWeight:'300',
    color:colors.grey,
    marginLeft:5
  },
  subPRice:{
    color:'#06BE77',
    paddingVertical:spacing[2]
  }
})