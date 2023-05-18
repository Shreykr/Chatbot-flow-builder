import { ButtonWrapper } from "./style"

const Button = (props) => {
  const { type, text } = props
  return <ButtonWrapper type={type}>{text}</ButtonWrapper>
}

export default Button
