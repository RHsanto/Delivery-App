import { SafeAreaView, ScrollView, View } from "react-native";
import Text from "../components/text/text";

import { typography } from "../theme/typography";

export default function Home(){
  return (
    <SafeAreaView>
      <ScrollView>
      <View >
      <Text preset="h3">
        Hello World
      </Text>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}