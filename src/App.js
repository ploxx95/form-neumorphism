import React from "react";
import styled from "styled-components";
import AddForm from "./component/container/addForm";
import ShowCard from "./component/container/showCard";

const AppStyled = styled.div``;

function App() {
  return (
    <AppStyled>
      <ShowCard></ShowCard>
    </AppStyled>
  );
}

export default App;
