import { useState, useRef, useCallback, useMemo } from "react"
import { HomeTemplate, MainNode } from "@modules/HomeModule"
import { Toast } from "@components/atoms"
import {
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  ReactFlowProvider,
  useOnSelectionChange,
} from "reactflow"

// Distinct id for nodes in Nodes Panel
let id = 0
const getId = () => `dndnode_${id++}`

/*
 * Home - Page Component
 *
 * Makes up the Home page containing "HomeTemplate" component
 */

const Home = () => {
  // State variables to hold react-flow state
  const reactFlowWrapper = useRef(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  // Function to get the node selected
  const nodeSelected = useMemo(() => {
    return nodes.filter((node) => {
      if (node.selected === true) {
        return node
      }
    })
  }, [nodes])

  // Function to unselect node
  const unselectNodes = useCallback(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.selected === true) {
          node.selected = false
        }
        return node
      })
    )
  }, [])

  // Function to set node content on text update in textarea of the settings panel
  const setNodeContent = useCallback(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node?.id === nodeSelected[0]?.id) {
          node.data = {
            ...node.data,
            content: event.target.value,
          }
        }
        return node
      })
    )
  }, [nodeSelected])

  // defining a custom node
  const nodeTypes = useMemo(() => ({ mainNode: MainNode }), [])

  // Define reusable styles for all kinds of nodes in Nodes Panel
  const resuableProperties = {
    iconName: "BiMessageRoundedDetail",
    iconColor: "#203dcdcb",
    labelColor: "#203dcdcb",
    iconSize: 30,
    labelSize: "1rem",
  }

  // Node options to be present in Nodes Panel
  const nodeTemplates = [
    {
      id: 1,
      content: "Message",
      ...resuableProperties,
    },
  ]

  // Event handler for implementing the save logic as per the problem statement
  const saveHandle = () => {
    const edgeTargetStore = {}

    // Storing all the id of node in target of edge
    edges.forEach((edge) => {
      if (!(edge in edgeTargetStore)) {
        edgeTargetStore[edge.target] = true
      }
    })

    if (
      nodes.length - Object.keys(edgeTargetStore).length > 1 ||
      nodes.length <= 1
    ) {
      Toast("error", "Cannot save Flow")
    } else {
      Toast("success", "Flow is valid and saved 😄")
    }
  }

  // Function called on connecting handles of nodes to set the edges
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 30,
              height: 30,
            },
            style: { width: 20, height: "30%" },
          },
          eds
        )
      ),
    [setEdges]
  )

  // Event called when the content is being dragged over droppable area
  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  // Event handler for handling the drop event of node from Nodes Panel. Creates new custom node in the dropped position
  const onDrop = useCallback(
    (event) => {
      event.preventDefault()
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData("application/reactflow")

      if (typeof type === "undefined" || !type) {
        return
      }

      const nodeContent = type === "Message" ? `text message` : "" // initial node content based on node type

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

      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, setNodes]
  )

  return (
    <>
      <ReactFlowProvider>
        <HomeTemplate
          saveHandle={saveHandle}
          nodeSelected={nodeSelected}
          reactFlowWrapper={reactFlowWrapper}
          nodes={nodes}
          edges={edges}
          setNodeContent={setNodeContent}
          unselectNodes={unselectNodes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          setReactFlowInstance={setReactFlowInstance}
          nodeTypes={nodeTypes}
          onDragOver={onDragOver}
          onDrop={onDrop}
          nodeTemplates={nodeTemplates}
          useOnSelectionChange={useOnSelectionChange}
        />
      </ReactFlowProvider>
    </>
  )
}

export default Home
