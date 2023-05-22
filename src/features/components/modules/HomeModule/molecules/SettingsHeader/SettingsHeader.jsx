import { memo } from "react"
import { Icon, Label } from "@components/atoms"
import { HeaderWrapper } from "./style"

/*
 * SettingsHeader component
 *
 * Renders icon and header text in the SettingsPanel header
 * The header text is based on the selected node
 *
 */
const SettingsHeader = ({ nodeSelected, setNodeSelected }) => {
  const SettingsComponent = memo(() => {
    return (
      <HeaderWrapper>
        {/* On click of the arrow icon, the selected node is unselected and Nodes Panel is shown */}
        <div className='arrow-back-icon' onClick={() => setNodeSelected([])}>
          <Icon color='black' size={30} iconName='BiLeftArrowAlt' />
        </div>
        <Label
          color='black'
          size='clamp(1.1rem, 2vw , 1.3rem)'
          padding='0px 10px'
          weight={500}
          userSelect={"none"}
          label={nodeSelected[0]?.data?.label}
          margin='auto'
        />
      </HeaderWrapper>
    )
  })
  SettingsComponent.displayName = "SettingsComponent"
  return <SettingsComponent />
}

export default SettingsHeader
