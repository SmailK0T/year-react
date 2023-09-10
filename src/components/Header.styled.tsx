import styled from "styled-components";

export const HeaderStyled = styled.header `
  display: flex;
  justify-content: center;
  margin-top: 200px;
`
export const CardsStyled = styled.div `
  width: 300px;
  height: 350px;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10)
  
`
/* export function ImgLogoStyled () {
  return (
    <img src="../Img/Rectangle 1.png" alt="" />
  )
} */
export const SectionStyle = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  
`
export const ImgLogoStyled = styled.img`
  margin: 10px 0 0 10px;
  width: 280px;
  height: 170px;

`
export const TextBoxStyled = styled.div `
  display: flex;
  margin-left: 20px;
  h1 {
    font-size: 16px;
  }
  p {
    margin-top: 20px;
    font-size: 12px;
    color: #ABB3BA;
  }

`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;

  button + button {
    margin-left: 12px;
  }

`