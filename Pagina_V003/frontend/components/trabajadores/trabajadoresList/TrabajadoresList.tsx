import styled from "styled-components";

import { Table } from "../../shared";

export const TrabajadoresList = ({ column, trabajadores }) => {
  return <Table column={column} rows={trabajadores} />;
};

const TrabajadoresListContainer = styled.div``;
