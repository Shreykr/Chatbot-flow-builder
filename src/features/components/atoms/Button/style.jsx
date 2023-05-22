import styled from "styled-components"

export const ButtonWrapper = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  border-radius: 8px;
  border: 1.25px solid #203dcdcb;
  color: #203dcdcb;
  font-weight: 500;
  font-size: 1.05rem;
  padding: 0.55rem;
  width: 12vmax;
  text-shadow: 0.25px 0.25px 0.75px #314ac7;
  cursor: pointer;

  @media screen and (max-width: 1033px) {
    padding: 0.475rem;
    width: auto;
    font-size: 1rem;
  }

  &:active {
    box-shadow: 1px 1px 1px 2px #4e92e0, -1px -1px 1px 2px #4e92e0;
    transition: box-shadow 0.075s linear;
  }
`
