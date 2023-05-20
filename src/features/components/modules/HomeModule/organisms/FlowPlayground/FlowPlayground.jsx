import { useState, useRef, useCallback, useMemo } from "react"
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Background,
  MarkerType,
  BackgroundVariant,

} from "reactflow"
import "reactflow/dist/style.css"
import { FlowWrapper } from "./style"
import MainNode from "../../molecules/MainNode/MainNode"

let id = 0
const getId = () => `dndnode_${id++}`

const defaultViewport = { x: 0, y: 0, zoom: 0.15 }

const FlowPlayground = () => {
  // const [nodesList, setNodesList] = useState([])
  // console.log(`nodesList:`, nodesList)
  // const [count, setCount] = useState(0)
  // console.log(`count:`, count)
  // const [{ isOver, canDrop }, drop] = useDrop(() => ({
  //   // The type (or types) to accept - strings or symbols
  //   accept: "nodes",
  //   drop: (item) => trackDrop(item.id),
  //   // Props to collect
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // }))

  // const trackDrop = (id) => {
  //   if (id === 1) {
  //     const element = <MainNode />
  //     setNodesList((prev) => [...prev, element])
  //     setCount((c) => c + 1)
  //   }
  // }

  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const nodeTypes = useMemo(() => ({ mainNode: MainNode }), [])

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          eds
        )
      ),
    []
  )

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData("application/reactflow")

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })
      const newNode = {
        id: getId(),
        type: "mainNode",
        position,
        data: { label: type },
        sourcePosition: "right",
        targetPosition: "left",
      }
      if (type === "Message") {
        setNodes((nds) => nds.concat(newNode))
      }
    },
    [reactFlowInstance]
  )

  return (
    <FlowWrapper>
      <ReactFlowProvider>
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
            defaultViewport={defaultViewport}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant={BackgroundVariant.Cross} gap={50} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </FlowWrapper>
  )
}

export default FlowPlayground
