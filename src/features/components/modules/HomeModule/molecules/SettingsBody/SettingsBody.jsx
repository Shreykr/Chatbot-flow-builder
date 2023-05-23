import { Label } from "@components/atoms"
import { BodyWrapper } from "./style"

/*
 * SettingsBody component
 *
 * Renders input textarea with a label in the Settings Panel
 *
 */
const SettingsBody = ({ setNodeContent, nodeSelected }) => {
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
        value={nodeSelected[0]?.data.content}
        rows='4'
        onChange={setNodeContent}
      />
    </BodyWrapper>
  )
}

export default SettingsBody
