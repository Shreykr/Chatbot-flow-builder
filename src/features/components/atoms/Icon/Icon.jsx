import { IconWrapper } from "./style"
import { BiMessageRoundedDetail, BiLeftArrowAlt } from "react-icons/bi"
import { RiWhatsappFill } from "react-icons/ri"

const Icon = ({ color, size, iconName }) => {
  let IconChoice
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
