import { SettingsBody, SettingsHeader } from "@modules/HomeModule"
import { SettingsWrapper } from "./style"

/*
 * SettingsPanel component
 *
 * Wraps header and body molecules to form the component
 * Rendered when a node is selected
 *
 */
const SettingsPanel = ({ unselectNodes, nodeSelected, setNodeContent }) => {
  return (
    <SettingsWrapper>
      <SettingsHeader
        nodeSelected={nodeSelected}
        unselectNodes={unselectNodes}
      />
      <SettingsBody
        nodeSelected={nodeSelected}
        setNodeContent={setNodeContent}
      />
    </SettingsWrapper>
  )
}

export default SettingsPanel
