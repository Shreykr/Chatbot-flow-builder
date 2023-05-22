import { memo } from "react"
import { Icon, Label } from "@components/atoms"
import { MainNodeWrapper } from "./style"
import { useConnectableFn } from "../hooks/MainNode"
import { Handle, Position } from "reactflow"

/*
 * MainNode component
 *
 * Custom UI for nodes in the FlowPlayground component
 * Combines Icon and Label atoms with source and target handles
 * Uses hasSourceConnections to determine whether handles can have edges
 *
 */
const MainNode = ({ id, data, selected, isConnectable }) => {
  const hasSourceConnections = useConnectableFn(id, "source")
  const MemoizedComponent = memo(() => {
    return (
      <>
        {/* Source handle on the left side */}
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
              label={data.label === "Message" ? "Send Message" : ""}
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
        {/* Target handle on the right side */}
        <Handle
          type='source'
          position={Position.Right}
          style={{ background: "#555" }}
          isConnectable={!hasSourceConnections}
        />
      </>
    )
  })

  MemoizedComponent.displayName = "MemoizedComponent"

  return <MemoizedComponent />
}

export default MainNode
