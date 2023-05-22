import { SettingsBody, SettingsHeader } from "@modules/HomeModule"
import { SettingsWrapper } from "./style"

const SettingsPanel = ({ nodeSelected, setNodeSelected, setNodeMessage }) => {
  console.log(`setNodeMessage:`, setNodeMessage)
  return (
    <SettingsWrapper>
      <SettingsHeader
        nodeSelected={nodeSelected}
        setNodeSelected={setNodeSelected}
      />
      <SettingsBody
        nodeSelected={nodeSelected}
        setNodeMessage={setNodeMessage}
      />
    </SettingsWrapper>
  )
}

export default SettingsPanel
