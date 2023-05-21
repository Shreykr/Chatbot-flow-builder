import { SettingsBody, SettingsHeader } from "@modules/HomeModule"
import { SettingsWrapper } from "./style"

const SettingsPanel = ({ nodeSelected, setNodeSelected }) => {
  return (
    <SettingsWrapper>
      <SettingsHeader
        nodeSelected={nodeSelected}
        setNodeSelected={setNodeSelected}
      />
      <SettingsBody nodeSelected={nodeSelected} />
    </SettingsWrapper>
  )
}

export default SettingsPanel
