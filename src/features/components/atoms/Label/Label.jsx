import { LabelWrapper } from "./style"

const Label = ({
  color,
  size,
  style,
  margin,
  padding,
  weight,
  spacing,
  opacity,
  label,
}) => {
  return (
    <LabelWrapper
      color={color}
      size={size}
      style={style}
      weight={weight}
      padding={padding}
      margin={margin}
      spacing={spacing}
      opacity={opacity}
    >
      {label}
    </LabelWrapper>
  )
}

export default Label
