import styled from "styled-components";

export const Menu = styled.nav`
ul {
  display: flex;
  flex-direction: row;
  padding: 0px;
  list-style: none;
  li > a {
    font-size: 25px;
    color: #0d9c00
  }
  li + li {
    margin-left: 20px;
  }
}
`
