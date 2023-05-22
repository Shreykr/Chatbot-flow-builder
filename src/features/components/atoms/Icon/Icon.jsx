import { IconWrapper } from "./style"
import { BiMessageRoundedDetail, BiLeftArrowAlt } from "react-icons/bi"
import { RiWhatsappFill } from "react-icons/ri"

/*
 * Icon component
 *
 * Reusable Icon UI
 * It takes color, size, iconName and renders Icon based on iconName
 *
 */
const Icon = ({ color, size, iconName }) => {
  let IconChoice
  // Set IconChoice based on iconName
  switch (iconName) {
    case "BiMessageRoundedDetail":
      IconChoice = <BiMessageRoundedDetail color={color} size={size} />
      break
    case "RiWhatsappFill":
      IconChoice = <RiWhatsappFill color={color} size={size} />
      break
    case "BiLeftArrowAlt":
      IconChoice = <BiLeftArrowAlt color={color} size={size} />
      break
    default:
      break
  }
  return <IconWrapper>{IconChoice}</IconWrapper>
}

export default Icon
