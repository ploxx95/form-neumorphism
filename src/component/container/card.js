import React from "react";
import styled from "styled-components";
import edi from "../img/editar.svg";
import cerrar from "../img/cerrar.svg";

const CardStyled = styled.div`
  width: 150px;
  height: 100px;
  font-family: "Montserrat", sans-serif;
  padding: 1em;
  box-sizing: border-box;
  border-bottom: 1px solid #d0deec;
  text-align: center;
  .icons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }
`;

function Card(props) {
  return (
    <CardStyled>
      <div className="icons">
        <span
          onClick={() => {
            props.edition(props.user);
            props.setUserForm(false);
          }}
        >
          <img src={edi} width="22" height="22" alt="editar"></img>
        </span>

        {props.useForm ? (
          <span onClick={() => props.deleteUser(props.user.id)}>
            <img src={cerrar} width="22" height="22" alt="cerrar"></img>
          </span>
        ) : (
          <></>
        )}
      </div>
      <h4>{props.user.task}</h4>
    </CardStyled>
  );
}

export default Card;
