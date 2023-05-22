import { useState, useRef, useCallback, useMemo, useEffect } from "react"
import { Button, Toast } from "@components/atoms"
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
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
  const [nodeMessage, setNodeMessage] = useState("")

  const nodeTypes = useMemo(() => ({ mainNode: MainNode }), [])

  useEffect(() => {
    if (nodeSelected.length === 0) {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.selected === true) {
            node.selected = false
          }
          return node
        })
      )
    }
  }, [nodeSelected])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node?.id === nodeSelected[0]?.id) {
          node.data = {
            ...node.data,
            content: nodeMessage,
          }
        }
        return node
      })
    )
  }, [nodeMessage, setNodes])

  const saveHandle = () => {
    const edgeTargetStore = {}
    edges.forEach((edge) => {
      if (!(edge in edgeTargetStore)) {
        edgeTargetStore[edge.target] = true
      }
    })
    if (nodes.length - Object.keys(edgeTargetStore).length > 1) {
      Toast("error", "Cannot save Flow")
    } else {
      Toast("success", "Flow is valid and saved 😄")
    }
  }

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

      const nodeContent = type === "Message" ? `text message` : ""

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = {
        id: getId(),
        type: "mainNode",
        position,
        data: { label: type, content: nodeContent },
        sourcePosition: "right",
        targetPosition: "left",
      }
      if (type === "Message" || type === "Data") {
        setNodes((nds) => nds.concat(newNode))
      }
    },
    [reactFlowInstance]
  )
  return (
    <HomeTemplateWrapper>
      <NavWrapper>
        <div className='button-container' onClick={(e) => saveHandle(e)}>
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
            {nodeSelected?.length !== 0 &&
            nodeSelected[0]?.data?.label === "Message" ? (
              <SettingsPanel
                nodeSelected={nodeSelected}
                setNodeSelected={setNodeSelected}
                setNodeMessage={setNodeMessage}
              />
            ) : nodeSelected?.length === 0 ? (
              <NodePanel nodeTemplates={nodeTemplates} />
            ) : (
              <></>
            )}
          </aside>
        </MainWrapper>
      </ReactFlowProvider>
      <ToastContainer
        theme='dark'
        position='bottom-center'
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
