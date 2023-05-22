import { useState, useEffect } from "react"
import { useReactFlow, getConnectedEdges, useStore } from "reactflow"

/*
 * Function to compute whether a source handle has connections
 * The "direction" parameter decides if source or target handle
 * Returned value from this is used in MainNode to block further edges from source handle
 */
export const useConnectableFn = (id, direction) => {
  const edgesCount = useStore((store) => store.edges.length)
  const { getNode, getEdges } = useReactFlow()
  const [hasConnections, setHasConnections] = useState(false)

  useEffect(() => {
    setHasConnections(() => {
      // returns true when number of edges from "direction" is more than 0
      const edges = getConnectedEdges([getNode(id)], getEdges()).filter(
        (e) => e[direction] === id
      )
      return edges.length > 0
    })
  }, [getNode, getEdges, id, edgesCount, direction])

  return hasConnections
}
