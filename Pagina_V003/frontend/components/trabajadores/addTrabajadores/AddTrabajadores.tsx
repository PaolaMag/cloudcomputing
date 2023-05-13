import { Button, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import styled from "styled-components";

export const AddTrabajadores = ({
  createTrabajadores,
  updateTrabajadores,
  isUpdating,
  trabajadores,
}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isUpdating) {
      updateTrabajadores({
        id: trabajadores.id,
        firstname,
        lastname,
        age,
      });
    } else {
      createTrabajadores({
        firstname,
        lastname,
        age,
      });
    }
    cleanForm();
  };

  const cleanForm = () => {
    setFirstname("");
    setLastname("");
    setAge(0);
  };

  useEffect(() => {
    setFirstname(trabajadores?.firstname || "");
    setLastname(trabajadores?.lastname || "");
    setAge(trabajadores?.age || 0);
  }, [trabajadores]);

  return (
    <form onSubmit={handleOnSubmit}>
      <TextField
        id="trabajadores-firstname"
        label="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        autoComplete="nope"
      />
      <TextField
        id="trabajadores-lastname"
        label="Last Name"
        value={lastname}
        autoComplete="nope"
        onChange={(e) => setLastname(e.target.value)}
      />
      <TextField
        id="trabajadores-age"
        label="Age"
        type="number"
        autoComplete="nope"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        startIcon={<SaveIcon />}
      >
        {isUpdating ? "Update" : "Create"} Trabajadores
      </Button>
    </form>
  );
};

const AddTrabajadoresContainer = styled.div``;
