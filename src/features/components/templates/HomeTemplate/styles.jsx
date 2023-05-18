import styled from "styled-components"

export const HomeTemplateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  padding: 10px;
  height: 100dvh;
`

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 10px;
  height: 4.5rem;
  background-color: rgb(217, 220, 214);
  align-items: center;
  border-radius: 10px;

  .button-container {
    margin: 0px 5rem 0px auto;
  }

  @media screen and (max-width: 768px) {
    .button-container {
      margin: 0px 0.4rem 0px auto;
    }
  }
`

export const MainWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  .flow-container {
    background-color: rgb(217, 220, 214);
    height: 87dvh;
    flex-basis: 75%;
    border-radius: 10px;
  }

  .sidebar-container {
    background-color: rgb(217, 220, 214);
    height: 87dvh;
    flex-basis: 25%;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;

    .flow-container {
      background-color: rgb(217, 220, 214);
      border-radius: 10px;
      height: 85dvh;
      flex-basis: unset;
    }
    .sidebar-container {
      background-color: rgb(217, 220, 214);
      border-radius: 10px;
    }
  }
`
