import React from "react";
import { Container } from "semantic-ui-react";
//everything in the head tag gets moved to the head tag of the top level HTML doc
import Head from "next/head";
import Header from "./Header";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>

      <Header />
      {props.children}
    </Container>
  );
};
