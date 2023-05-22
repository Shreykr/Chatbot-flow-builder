import { SettingsBody, SettingsHeader } from "@modules/HomeModule"
import { SettingsWrapper } from "./style"

/*
 * SettingsPanel component
 *
 * Wraps header and body molecules to form the component
 * Rendered when a node is selected
 *
 */
const SettingsPanel = ({ nodeSelected, setNodeSelected, setNodeMessage }) => {
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
