// import { Link } from '@mui/material';
import styled from "styled-components";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const GlobalMenu = () => (
  <GlobalMenuContainer>
    <StyledLink href="/customers">
      <PersonIcon /> Customers
    </StyledLink>
    <StyledLink href="/products">
      <ShoppingCartIcon /> Products
    </StyledLink>
    <StyledLink href="/trabajadores">
      <ShoppingCartIcon /> Trabajadores
    </StyledLink>
  </GlobalMenuContainer>
);

const GlobalMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  border: 1px solid gray;
  border-radius: 2px;
  box-shadow: 1px solid gray;
  background-color:#d55f5f;
`;

const StyledLink = styled(Link)`
  margin: 8px 12px;
  color: whitesmoke;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: #005e8b;
  }
`;

export default GlobalMenu;
