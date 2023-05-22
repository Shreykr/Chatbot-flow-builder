import { useState, useEffect } from "react"
import { Label } from "@components/atoms"
import { BodyWrapper } from "./style"

/*
 * SettingsBody component
 *
 * Renders input textarea with a label in the Settings Panel
 *
 */
const SettingsBody = ({ nodeSelected, setNodeMessage }) => {
  const [value, setValue] = useState(nodeSelected[0].data.content)

  // Effect hook that uses content in selected node and updates text in textarea
  useEffect(() => {
    setValue(nodeSelected[0].data.content)
  }, [nodeSelected])

  // Event handler to change the content of selected node
  const handleChange = (event) => {
    setNodeMessage(event.target.value)
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
        userSelect={"none"}
      />
      <textarea
        name='node-message'
        placeholder={
          nodeSelected[0]?.data.label === "Message" ? "Enter node message" : ""
        }
        rows='4'
        value={value}
        onChange={handleChange}
      />
    </BodyWrapper>
  )
}

export default SettingsBody
