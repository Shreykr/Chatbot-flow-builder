import styled from "styled-components"

export const BodyWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-flow: column nowrap;
  border-bottom: 1px solid #bdbcbc;
  padding: 10px 20px 50px 20px;
  gap: 10px;

  textarea {
    resize: vertical;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    font-size: clamp(1.1rem, 2vw, 1.15rem);
    letter-spacing: 1.5px;
  }
  @media screen and (max-width: 1033px) {
    border-bottom: 0px;

    textarea {
      resize: none;
    }
  }
`
