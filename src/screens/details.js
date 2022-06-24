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
    {/* start main view */}
    <View>
     <Image style={{height:200}} source={require('../../assets/image/Media.jpg')} />
{/* start price Container view */}
    <View style={styles.priceContainer}>
      <View style={styles.textView}>
      <Text preset="h2">Boston Lettuce</Text>
      <View style={styles.price}>
      <Text preset="h1">1.10</Text>
      <Text style={styles.currency}>€ / piece</Text>
      </View>
      <Text preset="h4" style={styles.subPRice}>~ 150 gr / piece</Text>
      <Text preset="h3" style={{marginTop:spacing[3]}}>Spain</Text>
      <Text preset="small" style={styles.description}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
      </View>
      
{/*start cart view */}
    <View style={styles.cartView}>
      <View style={styles.loveBtn}>
        <AntDesign name="hearto" size={20} style={{color:colors.grey}}/>
    </View>
      <View style={styles.cartBtn}>
        <AntDesign name="shoppingcart" size={20} color="white" />
        <Text preset="h4">add to cart</Text>
        </View>
    </View>
 
{/* end price container */}
        </View>
{/* end main view */}
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
  },
  description:{
    color:colors.grey,
    marginTop:spacing[3],
    lineHeight:24,
    },
  cartView:{
   flexDirection:'row',
   marginTop:spacing[4],
   textAlign:'center',
   alignItems:'center',
   padding:20,
 
  },
  loveBtn:{
  marginRight:20,
  backgroundColor:colors.white,
  padding:spacing[5],
  borderRadius:8,
  },
  cartBtn:{
  backgroundColor:colors.green,
  padding:spacing[5],
  width:'75%',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:8,
  },

  
})