import { Button } from "@components/atoms"
import { NodePanel, FlowPlayground, SettingsPanel } from "@modules/HomeModule"
import { HomeTemplateWrapper, MainWrapper, HeaderWrapper } from "./styles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/*
 * HomeTemplate component
 *
 * Defines the layout for all the sub-components (molecules) in Home page
 *
 */
const HomeTemplate = ({
  saveHandle,
  nodeSelected,
  reactFlowWrapper,
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  setReactFlowInstance,
  nodeTypes,
  onDragOver,
  onDrop,
  nodeTemplates,
  useOnSelectionChange,
  setNodeContent,
  unselectNodes,
}) => {
  return (
    <HomeTemplateWrapper>
      <HeaderWrapper>
        <div className='button-container' onClick={(e) => saveHandle(e)}>
          <Button type='button' text='Save Changes' disabled={false} />
        </div>
      </HeaderWrapper>
      <MainWrapper nodeSelected={nodeSelected}>
        <main className='flow-container'>
          <FlowPlayground
            reactFlowWrapper={reactFlowWrapper}
            nodes={nodes}
            edges={edges}
            setNodeContent={setNodeContent}
            unselectNodes={unselectNodes}
            nodeSelected={nodeSelected}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            setReactFlowInstance={setReactFlowInstance}
            nodeTypes={nodeTypes}
            onDrop={onDrop}
            onDragOver={onDragOver}
            useOnSelectionChange={useOnSelectionChange}
          />
        </main>
        <aside className='sidebar-container'>
          {nodeSelected?.length !== 0 &&
          nodeSelected[0]?.data?.label === "Message" ? ( // conditionally choose what Panel to render
            <SettingsPanel
              unselectNodes={unselectNodes}
              nodeSelected={nodeSelected}
              setNodeContent={setNodeContent}
            />
          ) : nodeSelected?.length === 0 ? (
            <NodePanel nodeTemplates={nodeTemplates} />
          ) : (
            <></>
          )}
        </aside>
      </MainWrapper>
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
