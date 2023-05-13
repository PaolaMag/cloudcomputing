import { useRouter } from "next/router";
import styled from "styled-components";
import { Product } from "../../interfaces";
import { useProducts } from "../../components/hooks";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const ProductPage = () => {
  const { currentProduct, getProduct } = useProducts();
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getProduct(Number(query.id));
    }
  }, [query.id]);

  console.log(currentProduct);

  if (!currentProduct)
    return (
      <Typography fontSize={18} align="center">
        Error!
      </Typography>
    );

  return (
    <ProductPageContainer>
      <Typography variant="h3">Product</Typography>
      <Typography fontSize={18} color={"white"}>
        Name: {currentProduct.name}
      </Typography>
      <Typography fontSize={18}>
        Description: {currentProduct.description}
      </Typography>
      <Typography fontSize={18}>Quantity: {currentProduct.quantity}</Typography>
    </ProductPageContainer>
  );
};

const ProductPageContainer = styled.div`
  margin: 24px;
  background-color: #f876b2;
  width: 50vh;
  height: 50vh;
  
`;

export default ProductPage;
