import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const ResultTable = ({ info }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log("🚀 ~ file: ResultTable.js ~ line 17 ~ ResultTable ~ name", name);
  return (
    <TableContainer border="1px solid #000000" m="2em">
      <Table variant="striped">
        <Thead background="#DBD9D9">
          <Tr
            fonts="Roboto"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
          >
            {!name ? (
              <>
                <Th>Nombre empresa</Th>
                <Th>Total de ventas</Th>
                <Th>Comisión</Th>
                <Th>Detalle</Th>
              </>
            ) : (
              <>
                <Th>Nombre cliente</Th>
                <Th>Personas</Th>
                <Th>Día</Th>
                <Th>Hora</Th>
                <Th>Valor venta</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {!name ? 
          Object.keys(info).map((agency) => (
            <Tr>
              <Td>{info[agency].name}</Td>
              <Td>
                {"$" +
                  new Intl.NumberFormat("es-CL", {
                    maximumSignificantDigits: 3,
                  }).format(info[agency].totalSales)}
              </Td>
              <Td>
                {"$" +
                  new Intl.NumberFormat("es-CL", {
                    maximumSignificantDigits: 3,
                  }).format(info[agency].totalSales * 0.025)}
              </Td>
              <Td>
                <Link href={`/empresa/${info[agency].name}`}>Ver detalle</Link>
              </Td>
            </Tr>
            ))
            :
          info[name]?.sales.map((sale) => (
            <Tr>
              <Td>{sale.name}</Td>
              <Td>
                {sale.persons}
              </Td>
              <Td>
                {sale.day}
              </Td>
              <Td>
                {sale.hour}
              </Td>
              <Td>
                {"$" +
                  new Intl.NumberFormat("es-CL", {
                    maximumSignificantDigits: 3,
                  }).format(sale.finalPrice)}
              </Td>
            </Tr>
          ))
          }
          
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
