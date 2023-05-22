import { Icon, Label } from "@components/atoms"
import { ContentNodeWrapper } from "./style"

/*
 * ContentNode component
 *
 * Renders nodes in the NodePanel
 * Combines Icon and Label atoms
 *
 */
const ContentNode = ({
  iconSize,
  labelSize,
  labelColor,
  iconName,
  iconColor,
  content,
}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <ContentNodeWrapper
      onDragStart={(event) => onDragStart(event, content)}
      draggable
    >
      <Icon iconName={iconName} size={iconSize} color={iconColor} />
      <Label label={content} size={labelSize} color={labelColor} weight='600' />
    </ContentNodeWrapper>
  )
}

export default ContentNode
