import { Th } from "@chakra-ui/react";
import { Fragment } from "react";

const TableHeadAgency = () => {
  return (
    <Fragment>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Nombre cliente
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Personas
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Día
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Hora
      </Th>
      <Th fonts="Roboto" fontWeight="700" fontSize="24px">
        Valor venta
      </Th>
    </Fragment>
  );
};

export default TableHeadAgency;
