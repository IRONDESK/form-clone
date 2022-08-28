import React from "react";
import styled from "styled-components";
import MakeForm from "../components/Form/AllForm";

function Create() {
  return (
    <Container>
      <MakeForm />
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 768px;
`;

export default Create;
