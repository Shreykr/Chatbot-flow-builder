import { Icon, Label } from "@components/atoms"
import { MainNodeWrapper } from "./style"
import { memo } from "react"
import { Handle, Position } from "reactflow"
import { useConnectableFn } from "../hooks/MainNode"

const MainNode = ({ id, data, selected, isConnectable }) => {
  const hasSourceConnections = useConnectableFn(id, "source")
  const MemoizedComponent = memo(() => {
    return (
      <>
        <Handle
          type='target'
          position={Position.Left}
          style={{ background: "#555" }}
          isConnectable={isConnectable}
        />
        <MainNodeWrapper selected={selected}>
          <div className='header-container'>
            <Icon color='black' size={20} iconName='BiMessageRoundedDetail' />
            <Label
              color='black'
              size='clamp(1.1rem, 1.825vw , 1.15rem)'
              margin='0px 7px'
              weight={700}
              label='Send Message'
            />
            <Icon color='black' size={23} iconName='RiWhatsappFill' />
          </div>
          <div className='body-container'>
            <Label
              color='black'
              size='clamp(1.1rem, 2vw , 1.2rem)'
              padding='0px 10px'
              weight={500}
              label={data.label === "Message" ? data.content : ""}
            />
          </div>
        </MainNodeWrapper>
        <Handle
          type='source'
          position={Position.Right}
          style={{ background: "#555" }}
          isConnectable={!hasSourceConnections}
        />
      </>
    )
  })

  MemoizedComponent.displayName = "MemoisedComponent"

  return <MemoizedComponent />
}

export default MainNode
