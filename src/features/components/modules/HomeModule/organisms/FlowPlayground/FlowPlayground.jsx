import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow"
import "reactflow/dist/style.css"
import { FlowWrapper } from "./style"

const defaultViewport = { x: 0, y: 0, zoom: 0.15 }

/*
 * FlowPlayground component
 *
 * Contains custom node "MainNode" formed when dropped
 * Contains controls and minimap provided by react-flow added for more control
 *
 */
const FlowPlayground = ({
  reactFlowWrapper,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  setReactFlowInstance,
  nodeTypes,
  onDrop,
  onDragOver,
}) => {
  return (
    <FlowWrapper>
      <div className='reactflow-wrapper' ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          selectNodesOnDrag={false}
          defaultViewport={defaultViewport}
          fitView
        >
          {/* Optional */}
          <Controls />
          <MiniMap zoomable pannable style />
          <Background variant={BackgroundVariant.Cross} gap={50} />{" "}
        </ReactFlow>
      </div>
    </FlowWrapper>
  )
}

export default FlowPlayground
