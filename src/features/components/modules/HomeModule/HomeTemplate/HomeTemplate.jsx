import { useState, useRef, useCallback, useMemo, useEffect } from "react"
import { Button } from "@components/atoms"
import {
  NodePanel,
  FlowPlayground,
  MainNode,
  SettingsPanel,
} from "@modules/HomeModule"
import {
  addEdge,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
  MarkerType,
  ReactFlowProvider,
} from "reactflow"
import { HomeTemplateWrapper, MainWrapper, NavWrapper } from "./styles"

let id = 0
const getId = () => `dndnode_${id++}`

const HomeTemplate = () => {
  const resuableProperties = {
    iconName: "BiMessageRoundedDetail",
    iconColor: "#203dcdcb",
    labelColor: "#203dcdcb",
    iconSize: 30,
    labelSize: "1rem",
  }

  const nodeTemplates = [
    {
      id: 1,
      content: "Message",
      ...resuableProperties,
    },
  ]

  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [nodeSelected, setNodeSelected] = useState([])
  const [nodeMessage, setNodeMessage] = useState("message")

  const nodeTypes = useMemo(() => ({ mainNode: MainNode }), [])

  useEffect(() => {
    if (nodeSelected.length === 0) {
      nodes.forEach((node) => {
        if (node.selected === true) {
          setNodes((nds) => nds.concat({ ...node, selected: false }))
        }
      })
    }
  }, [nodeSelected])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeSelected[0].id) {
          node.data = {
            ...node.data,
            content: nodeMessage,
          }
        }
        return node
      })
    )
  }, [nodeMessage, setNodes])

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
        data: { label: type, content: nodeMessage },
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
    <HomeTemplateWrapper>
      <NavWrapper>
        <div className='button-container'>
          <Button type='button' text='Save Changes' />
        </div>
      </NavWrapper>
      <ReactFlowProvider>
        <MainWrapper nodeSelected={nodeSelected}>
          <main className='flow-container'>
            <FlowPlayground
              reactFlowWrapper={reactFlowWrapper}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              setReactFlowInstance={setReactFlowInstance}
              nodeTypes={nodeTypes}
              onDrop={onDrop}
              onDragOver={onDragOver}
              useOnSelectionChange={useOnSelectionChange}
              setNodeSelected={setNodeSelected}
            />
          </main>
          <aside className='sidebar-container'>
            {nodeSelected?.length === 0 ? (
              <NodePanel nodeTemplates={nodeTemplates} />
            ) : (
              <SettingsPanel
                nodeSelected={nodeSelected}
                setNodeSelected={setNodeSelected}
                setNodeMessage={setNodeMessage}
              />
            )}
          </aside>
        </MainWrapper>
      </ReactFlowProvider>
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
