import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";
import styled from "styled-components";
import {StyleBth, SuperButton} from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Box } from "./components/BoxNav.styled";
import { Menu } from "./components/Meny.styled";
import { myThema } from "./styles/Thema.stayled";
function App() {
  return (
    <div className="App">
   {/*    <Menu>
        <ul>
          <li><a href="">li elements 1</a></li>
          <li><a href="">li elements 2</a></li>
          <li><a href="">li elements 3</a></li>
        </ul>
      </Menu> */}
      <Box>
      <StyleBth btnType={"primary"} color={myThema.grey.dark} activ> Click </StyleBth>
      <StyleBth btnType={"outlined"} color={myThema.color.secondary}> Click </StyleBth>
      <StyleBth activ> Click </StyleBth>

       {/*  <StyleBth color="black" fontSize={"20px"}> Click </StyleBth>
        <StyleBth color="black"> Click </StyleBth>
        <StyleBth color="black"> Click </StyleBth> */}
       {/*  <SuperButton> Hover Click</SuperButton>
        <SuperButton as="a" href="#"> Link Click</SuperButton>
        <SuperButton as={Link} href="#"> Link Click</SuperButton> */}
      </Box>
      {/* <PaigeTitle title={"Component"} />
      <PaigeTitle title={"Component 2"} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion titleValue={"Menu"} collapsed={true} /> */}
      {/* <Accordion titleValue={"User"} collapsed={false} /> */}
    </div>
  );
}
/* function PaigeTitle(props: any) {
  console.log("PaigeTitle rendering");
  return <h1>{props.title}</h1>;
}
function Rating(props: any) {
  console.log("Rating component");
  if (props.value === 1) {
    return (
      <div>
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  } */ /* else {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
      </div>)
  } */
/*   return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
    </div>
  );
} */
/* function Star(props: any) {
  console.log("Star rendering");
  if (props.selected === true) {
    return (
      <span>
        <b>Star</b>{" "}
      </span>
    );
  } else {
    return <span>Star </span>;
  }
}
type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  debugger
  if ((props.collapsed === true)) {
    return (<AccordionTitle />);
  } else {
    return(
      <>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
      </>
    );
  }
  
}
function AccordionTitle(props: any) {
  console.log("Accordion title rendering");
  return <h3>{props.title}</h3>;
}
function AccordionBody() {
  console.log("Accordion body rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
} */
export default App;



