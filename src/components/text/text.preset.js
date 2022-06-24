import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";


const BASE ={
  fontFamily:typography.primary,
  fontSize:16,
  color:colors.violet,
}

const BOLD ={
  fontFamily:typography.primaryBold,
  color:colors.violet,
}

export const presets ={
  default : BASE,
  bold:BOLD,
  h1:{
    ...BOLD,
    fontSize:34,
  },
  h2:{
    ...BOLD,
    fontSize:30,
  },
  h3:{
    ...BOLD,
    fontSize:24,
  },
  h4:{
    ...BASE,
    fontSize:18,
  },
  small:{
    ...BASE,
    fontSize:17
  }
}