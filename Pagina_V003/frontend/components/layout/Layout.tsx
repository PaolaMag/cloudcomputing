import Head from "next/head";
import GlobalMenu from "../globalMenu/GlobalMenu";

import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
    <title>La Tiendita</title>
    </Head>
    <Container>
      <GlobalMenu />
      <main>{children}</main>
    </Container>
    </>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100wh - 16px);
  height: calc(100vh - 16px);
  background-image: url('https://thumbs.dreamstime.com/b/fondo-de-la-historieta-del-supermercado-79995072.jpg');
`;

export default Layout;
