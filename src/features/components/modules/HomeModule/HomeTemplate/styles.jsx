import styled from "styled-components"

export const HomeTemplateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  padding: 8px;
  height: fit-content;

  .react-flow__handle {
    width: 10px;
    height: 10px;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 10px;
  height: 4.5rem;
  background-color: hsla(90, 8%, 85%, 1);
  align-items: center;
  border-radius: 10px;

  .button-container {
    margin: 0px 5rem 0px auto;
  }

  @media screen and (max-width: 1033px) {
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
    background-color: hsla(84, 14%, 93%, 1);
    height: 88dvh;
    flex-basis: 65%;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .sidebar-container {
    background-color: hsla(84, 14%, 93%, 1);
    height: 88dvh;
    width: 100%;
    flex-basis: 35%;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    ${(props) =>
      props.nodeSelected.length === 0
        ? `padding: 20px; gap:30px;`
        : `padding: 0px; gap:0px;`};
  }

  @media screen and (max-width: 1033px) {
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
