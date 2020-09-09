import React, { useState } from "react";
import AddForm from "./addForm";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import styled from "styled-components";
import EditForm from "./editForm";

const ShowCardStyled = styled.div`
  padding: 2em;
  .wrapper {
    max-width: 500px;
    margin: auto;
    padding: 2.5em 0;
  }
  .wrapper-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 20px;
  }
  .element {
  }
`;

const usersData = [
  { id: uuidv4(), task: "comer carne" },
  { id: uuidv4(), task: "comer pollo" },
  { id: uuidv4(), task: "dormir" },
];

function ShowCard() {
  const [users, setUsers] = useState(usersData);
  const [useForm, setUserForm] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    task: "",
  });

  function deleteUser(id) {
    const deleteById = users.filter((user) => user.id !== id);

    setUsers(deleteById);
  }
  const addUser = (data) => {
    data.id = uuidv4();
    setUsers([...users, data]);
  };

  const updateUser = (dataEdit) => {
    const userEdit = users.map((user) =>
      user.id === dataEdit.id ? dataEdit : user
    );
    setUsers(userEdit);
  };
  const edition = (user) => {
    setCurrentUser({ id: user.id, task: user.task });
  };

  return (
    <ShowCardStyled>
      {useForm ? (
        <AddForm addUser={addUser} />
      ) : (
        <EditForm
          currentUser={currentUser}
          updateUser={updateUser}
          setUserForm={setUserForm}
        />
      )}

      <div className="wrapper">
        <div className="wrapper-grid">
          {users.map((user) => (
            <div className="element" key={user.id}>
              <Card
                id={user.id}
                user={user}
                edition={edition}
                deleteUser={deleteUser}
                setUserForm={setUserForm}
                useForm={useForm}
              />
            </div>
          ))}
        </div>
      </div>
    </ShowCardStyled>
  );
}

export default ShowCard;
