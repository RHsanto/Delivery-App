import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/color";
import { spacing } from "../theme/spacing";


export default function Home(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
       <View style={styles.logoView}>
        <Text style={styles.logo}>D</Text>
      </View>
      <View style={styles.orderView}>
        <View style={styles.imageView}>
          <Image style={{marginHorizontal:spacing[8],marginVertical:spacing[7]}}  source={require('../../assets/image/Vector.jpg')} />
        </View>
        <Text preset="h1"> Non-Contact </Text>
        <Text preset="h1">Deliveries</Text>
        <Text preset="small" style={styles.description}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
       </Text>
       
         {/* button  */}
    <View style={styles.orderBtn} >
    <Pressable onPress={()=>{
      alert('HEllo')
    }}>
        <Text preset="h4" style={{color:colors.white,textAlign:'center',
        textTransform: 'uppercase'}}>order now</Text>
    </Pressable>
    </View>
    <View >
      <Text preset="h4" style={{color:colors.grey,textAlign:'center',
        textTransform: 'uppercase'}}>dismiss</Text>
    </View>
     
    
    </View>
     
     </View>
 {/* order delivery section */}
  
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
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
    marginTop:spacing[10],
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
  },
  description:{
    color:colors.grey,
    textAlign:'center',
    marginTop:spacing[5],
    marginHorizontal:spacing[5]
  },
  orderBtn:{
    width:'90%',
    backgroundColor:colors.green,
    padding:spacing[5],
    marginVertical:spacing[10],
    textAlign:'center',
    borderRadius:10
 
  }
})