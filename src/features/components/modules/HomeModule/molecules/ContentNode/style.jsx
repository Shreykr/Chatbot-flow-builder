import styled from "styled-components"

export const ContentNodeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #203dcdcb;
  width: 12.5vmax;
  max-width: 200px;
  height: 100px;
  border-radius: 5px;
  user-select: none;
  opacity: ${(props) => (props.isDragging ? 1 : 1)};
  cursor: grab;

  @media screen and (max-width: 1033px) {
    width: 18.5vmax;
    max-width: 200px;
  }
`
