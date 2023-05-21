import { Label } from "@components/atoms"
import { BodyWrapper } from "./style"
import { useState } from "react"

const SettingsBody = ({ nodeSelected }) => {
  const [value, setValue] = useState()
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <BodyWrapper>
      <Label
        label={nodeSelected[0]?.data.label === "Message" ? "Text" : ""}
        color='black'
        size='clamp(1.1rem, 2vw , 1.3rem)'
        weight={400}
        opacity={0.65}
      />
      <textarea
        name='node-message'
        placeholder='Enter node message'
        rows='4'
        value={value}
        onChange={handleChange}
      />
    </BodyWrapper>
  )
}

export default SettingsBody
