import React from "react";
import styled from "styled-components";

import usePreview from "../hooks/usePreview";
import MakeForm from "../components/Form/AllForm";
import ViewContents from "../components/Preview/ViewContents";

function Create() {
  const { data } = usePreview();
  return (
    <Container>
      <MakeForm />
      {data?.title ? (
        <Preview>
          <ViewContents />
        </Preview>
      ) : null}
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 768px;
`;

const Preview = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 768px;
  height: 90vh;
  background-color: #fff;
  border: 2px solid #999;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
`;

export default Create;
