import { ButtonWrapper } from "./style"

/*
 * Button component
 *
 * Reusable button UI
 * It takes type, disabled, text and renders Button with text provided
 *
 */
const Button = ({ type, disabled, text }) => {
  return (
    <ButtonWrapper type={type} disabled={disabled}>
      {text}
    </ButtonWrapper>
  )
}

export default Button
