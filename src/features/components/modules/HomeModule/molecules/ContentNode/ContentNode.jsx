import { Icon, Label } from "@components/atoms"
import { ContentNodeWrapper } from "./style"
// import { useDrag } from "react-dnd"

const ContentNode = ({
  iconSize,
  labelSize,
  labelColor,
  iconName,
  iconColor,
  content,
  // id,
}) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "nodes",
  //   item: { id: id },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // }))

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
