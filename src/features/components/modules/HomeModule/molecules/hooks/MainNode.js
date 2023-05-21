import { useState, useEffect } from "react"
import { useReactFlow, getConnectedEdges, useStore } from "reactflow"

export const useConnectableFn = (id, direction) => {
  const edgesCount = useStore((store) => store.edges.length)
  const { getNode, getEdges } = useReactFlow()
  const [hasConnections, setHasConnections] = useState(false)

  useEffect(() => {
    setHasConnections(() => {
      const edges = getConnectedEdges([getNode(id)], getEdges()).filter(
        (e) => e[direction] === id
      )
      return edges.length > 0
    })
  }, [getNode, getEdges, id, edgesCount, direction])

  return hasConnections
}
