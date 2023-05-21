import styled from "styled-components"

export const MainNodeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: clamp(17rem, 35vw, 20vmax);
  max-width: 400px;
  height: clamp(7.5rem, 11.5vh, 30vmax);
  border-radius: 14px;
  box-shadow: 0px 0px 15px 0px rgba(29, 0, 10, 0.2),
    0px 2px 3px 0px rgba(29, 0, 10, 0.2);
  justify-content: space-between;

  outline: ${(props) => (props.selected ? "3.5px solid #8194B7" : "")};
  .header-container {
    width: 100%;
    height: 40%;
    border-radius: 10px 10px 0px 0px;
    background-color: #9ee5d7;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .header-container span:nth-of-type(1) {
    padding-left: 10px;
  }
  .header-container span:nth-of-type(2) {
    padding-bottom: 6px;
  }
  .header-container span:nth-of-type(3) {
    margin-left: auto;
    padding-right: 12.5px;
  }

  .body-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60%;
    background-color: hsla(84, 14%, 93%, 1);
    border-radius: 10px;
  }
`
