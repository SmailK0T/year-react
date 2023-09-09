import styled from "styled-components"
import { Link } from "./Link.styled"
import { myThema } from "../styles/Thema.stayled";

export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: col-resize;
  }
  @media ${myThema.media.mobile}{
    flex-direction: column;}
`