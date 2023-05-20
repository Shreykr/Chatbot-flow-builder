import { Fragment } from "react"
import { ContentNode } from "@modules/HomeModule"

const NodePanel = ({ nodeTemplates }) => {
  return (
    <>
      {nodeTemplates.map((node, index) => {
        return (
          <Fragment key={node.content + `_${index}`}>
            <ContentNode
              id={node.id}
              iconName={node.iconName}
              iconColor={node.iconColor}
              labelColor={node.labelColor}
              iconSize={node.iconSize}
              labelSize={node.labelSize}
              content={node.content}
            />
          </Fragment>
        )
      })}
    </>
  )
}

export default NodePanel
