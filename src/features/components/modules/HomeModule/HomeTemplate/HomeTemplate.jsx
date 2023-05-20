import { Button } from "@components/atoms"
import { NodePanel } from "@modules/HomeModule"
import { HomeTemplateWrapper, MainWrapper, NavWrapper } from "./styles"
// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"
import FlowPlayground from "../organisms/FlowPlayground/FlowPlayground"

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
  return (
    <HomeTemplateWrapper>
      <NavWrapper>
        <div className='button-container'>
          <Button type='button' text='Save Changes' />
        </div>
      </NavWrapper>
      {/* <DndProvider backend={HTML5Backend}> */}
      <MainWrapper>
        <main className='flow-container'>
          <FlowPlayground />
        </main>
        <aside className='sidebar-container'>
          <NodePanel nodeTemplates={nodeTemplates} />
        </aside>
      </MainWrapper>
      {/* </DndProvider> */}
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
