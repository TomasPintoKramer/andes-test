import { Th } from "@chakra-ui/react";
import { Fragment } from "react";

const TableHeadIndex = () => {
  return (
    <Fragment>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Nombre empresa
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Total de ventas
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Comisión
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Detalle
      </Th>
    </Fragment>
  );
};

export default TableHeadIndex;
