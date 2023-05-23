import styled from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 7.5%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid #bdbcbc;

  @media screen and (max-width: 1033px) {
    padding: 10px 1px;
  }

  .arrow-back-icon {
    margin: 0px 0px 0px 10px;
    cursor: pointer;
  }
  .arrow-back-icon:hover {
    transform: scale(1.15);
    transition: transform 0.05s linear;
  }
  .arrow-back-icon:active {
    transform: scale(1);
  }
`
