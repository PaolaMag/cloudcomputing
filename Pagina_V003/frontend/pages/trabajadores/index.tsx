import { useEffect, useState } from "react";
import styled from "styled-components";

import { AddTrabajadores, TrabajadoresList } from "../../components/trabajadores";
import { useTrabajadores } from "../../components/hooks";
import Link from "next/link";
import { Trabajadores } from "../../interfaces";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const column = [
  {
    id: "firstname",
    name: "First Name",
  },
  {
    id: "lastname",
    name: "Last Name",
  },
  {
    id: "age",
    name: "Age",
  },
];

const TrabajadoresPage = () => {
  const {
    trabajadoresList,
    getTrabajadores,
    createTrabajadores,
    updateTrabajadores,
    deleteTrabajadores,
  } = useTrabajadores();
  const [trabajadores, setTrabajadores] = useState<Trabajadores | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const newColumn = {
    id: "actions",
    name: "Actions",
    render: (row: Trabajadores, item: any) => (
      <>
        {/* <Link href={'/products/:id'} as={`/products/${row.id}`}><VisibilityIcon/></Link> */}
        <IconButton
          onClick={() => router.push(`/trabajadores/${row.id}`)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={() => setTrabajadores(row)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDeleteTrabajadores(row.id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  };

  useEffect(() => {
    setIsUpdating(Boolean(trabajadores));
  }, [trabajadores]);

  const onCreateTrabajadores = (trabajadores) => {
    console.log(trabajadores);
    createTrabajadores(trabajadores);
  };

  const onUpdateTrabajadores = (trabajadores) => {
    console.log(trabajadores);
    updateTrabajadores(trabajadores);
  };

  const onDeleteTrabajadores = (id) => {
    deleteTrabajadores(id);
  };

  return (
    <TrabajadorPageContainer>
      <Typography variant="h3">Trabajadores</Typography>
      <AddTrabajadores
        createTrabajadores={onCreateTrabajadores}
        updateTrabajadores={onUpdateTrabajadores}
        isUpdating={isUpdating}
        trabajadores={trabajadores}
      />
      <TrabajadoresList column={[...column, newColumn]} trabajadores={trabajadoresList} />
    </TrabajadorPageContainer>
  );
};

const TrabajadorPageContainer = styled.div`
  background-color: #e2e67c;
`

export default TrabajadoresPage;
