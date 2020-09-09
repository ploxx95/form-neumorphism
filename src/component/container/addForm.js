import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const AddFormStyled = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 2em;
  box-sizing: border-box;
  box-shadow: 9px 9px 18px #cbd4dd, -9px -9px 18px #f9ffff;
  h2 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    margin-bottom: 20px;
    text-transform: capitalize;
    color: #9badbf;
  }
  .input-field,
  .butonsito {
    position: relative;
    height: 50px;
    width: 100%;
  }
  .input-field {
    margin-bottom: 20px;
  }
  .input-field input {
    border: none;
    padding-left: 15px;
    height: 100%;
    width: 100%;
    outline: 0px;
    background: #e2ebf6;
    box-shadow: inset 5px 5px 6px #d0d8e2, inset -5px -5px 6px #f4feff;
  }
  .mylabel {
    position: absolute;
    top: 30%;
    left: 15px;
    pointer-events: none;
    transform: translateY(-35px);
    font-family: "Noto Sans", sans-serif;
    font-size: 13px;
    color: #9badbf;
  }

  button {
    width: 100%;
    height: 100%;
    border: none;
    color: #87a6cb;
    cursor: pointer;
    background: none;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    background: #e2ebf6;
    box-shadow: 5px 5px 6px #d0d8e2, -5px -5px 6px #f4feff;
  }
  .errors {
    font-size: 13px;
    font-family: "Noto Sans", sans-serif;
    text-transform: capitalize;
    color: red;
  }
`;

function AddForm(props) {
  const onSubmit = (data, e) => {
    e.target.reset();
    props.addUser(data);
  };

  const { register, errors, handleSubmit } = useForm();

  return (
    <AddFormStyled>
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            name="task"
            ref={register({
              required: {
                value: true,
                message: "tarea requerida",
              },
              minLength: {
                value: 5,
                message: "minimo de caracteres 5",
              },
            })}
          />
          <div className="errors">{errors?.task?.message}</div>
          <label className="mylabel">Tareas</label>
        </div>
        <div className="butonsito">
          <div className="inner"></div>
          <button type="submit">Add</button>
        </div>
      </form>
    </AddFormStyled>
  );
}

export default AddForm;
