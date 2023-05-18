import { Button } from "@components/atoms"
import { HomeTemplateWrapper, MainWrapper, NavWrapper } from "./styles"

const HomeTemplate = () => {
  return (
    <HomeTemplateWrapper>
      <NavWrapper>
        <div className='button-container'>
          <Button type='utility' text='Save Changes' />
        </div>
      </NavWrapper>
      <MainWrapper>
        <main className='flow-container'></main>
        <aside className='sidebar-container'></aside>
      </MainWrapper>
    </HomeTemplateWrapper>
  )
}

export default HomeTemplate
