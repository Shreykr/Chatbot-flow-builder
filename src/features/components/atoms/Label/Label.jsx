import { LabelWrapper } from "./style"

/*
 * Label component
 *
 * Reusable Label UI
 *
 */
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
  userSelect,
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
      userSelect={userSelect}
    >
      {label}
    </LabelWrapper>
  )
}

export default Label
