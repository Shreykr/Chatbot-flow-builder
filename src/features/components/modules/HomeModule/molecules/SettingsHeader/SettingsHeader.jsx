import { Icon, Label } from "@components/atoms"
import { HeaderWrapper } from "./style"

const SettingsHeader = ({ nodeSelected, setNodeSelected }) => {
  return (
    <HeaderWrapper>
      <div className='arrow-back-icon' onClick={() => setNodeSelected([])}>
        <Icon color='black' size={30} iconName='BiLeftArrowAlt' />
      </div>
      <Label
        color='black'
        size='clamp(1.1rem, 2vw , 1.3rem)'
        padding='0px 10px'
        weight={500}
        label={nodeSelected[0]?.data?.label}
        margin='auto'
      />
    </HeaderWrapper>
  )
}

export default SettingsHeader
