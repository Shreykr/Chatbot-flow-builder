import styled from "styled-components"

export const LabelWrapper = styled.span`
  color: ${(props) => props.color || "black"};
  margin: ${(props) =>
    props.margin === "auto"
      ? "auto"
      : typeof props.margin === "string"
      ? props.margin
      : "5px"};
  padding: ${(props) =>
    props.padding === "auto"
      ? "auto"
      : typeof props.padding === "string"
      ? props.padding
      : "2.5px"};
  font-size: ${(props) => props.size || "0.9rem"};
  font-weight: ${(props) => props.weight || "300"};
  opacity: ${(props) => props.opacity || "1"};
  user-select: ${(props) => props.userSelect || "auto"};
`
