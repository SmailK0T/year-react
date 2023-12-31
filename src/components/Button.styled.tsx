import styled, { css } from "styled-components"
import { MyAnimations } from "../styles/animations/Animations"
import { myThema } from "../styles/Thema.stayled";


type StyleBthPropsType = {
  color?: string;
  fontSize?: string;
  btnType?: "primary" | "outlined"
  activ?: boolean
}

export const StyleBth = styled.button <StyleBthPropsType>`
  background-color: ${myThema.grey.dark};
  /* font-size: 2rem; */
  font-size: ${props => props.fontSize || "10px"};
  font-weight: bold;
  border: none; 
  /* color: #04ff00; */
  width: 86px;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 19px;
  &:hover {
    background-color: ${props => props.color || "#ea355c"};
  }

 /*  &:last-child:hover {
    background-color: #000000;
  } */

${props => props.btnType === "outlined" && css<StyleBthPropsType>`
  border: 2px solid ${props => props.color || "#4E71FE"};
  color: ${props => props.color || "#4E71FE"};
  background-color: transparent;
`}

// primery

${props => props.btnType === "primary" && css<StyleBthPropsType>`
  color: #eaeaea;
  background-color: ${props => props.color || "#4E71FE"};
  
`}
// outlined
${props => props.activ && css<StyleBthPropsType>`
  &:hover {
    background-color: transparent;
    border: 2px solid ${props => props.color || "#ea355c"};
    color: ${props => props.color || "#ea355c"};
  }
`}
`
export const SuperButton = styled(StyleBth) `
  color: #ffffff;
  animation: ${MyAnimations} 2s ease-in-out;
`