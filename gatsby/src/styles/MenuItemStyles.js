import styled from "styled-components";


const MenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  .order-button {
    display: flex;
    font-size: 1.5rem;
    gap: 1rem;
    @media (max-width:520px) {
      flex-direction: column;
      max-width: 130px;
    }
  }

  /* button {
    font-size: 1.5rem;
  }

  button + button {
    margin-left: 1rem;
  } */



  .remove {
      background: none;
      color: var(--red);
      font-size: 5rem;
      position: absolute;
      top: 8px;
      right: 0;
      box-shadow: none;
      line-height: 1rem;
      @media (max-width:430px) {
        position: initial;
        margin-top: 10px;
      }
  }

`

export default MenuItemStyles