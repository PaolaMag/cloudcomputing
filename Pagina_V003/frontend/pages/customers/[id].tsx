import { useRouter } from "next/router";
import styled from "styled-components";
import { Customer } from "../../interfaces";
import { useCustomers } from "../../components/hooks";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const CustomerPage = () => {
  const { currentCustomer, getCustomer } = useCustomers();
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getCustomer(Number(query.id));
    }
  }, [query.id]);

  console.log(currentCustomer);

  if (!currentCustomer)
    return (
      <Typography fontSize={18} align="center">
        Error!
      </Typography>
    );

  return (
    <CustomerPageContainer>
      <Typography variant="h3">Customer</Typography>
      <Typography fontSize={18} color={"white"}>
        First name: {currentCustomer.firstname}
      </Typography>
      <Typography fontSize={18}>
        Last name: {currentCustomer.lastname}
      </Typography>
      <Typography fontSize={18}>Age: {currentCustomer.age}</Typography>
    </CustomerPageContainer>
  );
};

const CustomerPageContainer = styled.div`
  margin: 24px;
  background-color: #7de8ff;
  width: 50vh;
  height: 50vh;
`;

export default CustomerPage;
