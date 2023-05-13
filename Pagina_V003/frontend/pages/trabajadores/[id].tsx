import { useRouter } from "next/router";
import styled from "styled-components";
import { Trabajadores } from "../../interfaces";
import { useTrabajadores } from "../../components/hooks";
import { useEffect } from "react";
import { Typography } from "@mui/material";

const TrabajadoresPage = () => {
  const { currentTrabajadores, getTrabajadores } = useTrabajadores();
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      getTrabajadores(Number(query.id));
    }
  }, [query.id]);

  console.log(currentTrabajadores);

  if (!currentTrabajadores)
    return (
      <Typography fontSize={16} align="center">
        Error!
      </Typography>
    );

  return (
    <TrabajadoresPageContainer>
      <Typography variant="h3">Trabajadores</Typography>
      <Typography fontSize={14} color={"blueviolet"}>
        First name: {currentTrabajadores.firstname}
      </Typography>
      <Typography fontSize={14}>
        Last name: {currentTrabajadores.lastname}
      </Typography>
      <Typography fontSize={14}>Age: {currentTrabajadores.age}</Typography>
    </TrabajadoresPageContainer>
  );
};

const TrabajadoresPageContainer = styled.div`
  margin: 24px;
`;

export default TrabajadoresPage;
