import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import TableHeadAgency from "../Components/Table/TableHeadAgency";
import TableHeadIndex from "../Components/Table/TableHeadIndex";

const ResultTable = ({ info }) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <TableContainer border="1px solid #000000" mx="2.25em">
      <Table variant="striped">
        <Thead background="#DBD9D9">
          <Tr>{!name ? <TableHeadIndex /> : <TableHeadAgency />}</Tr>
        </Thead>
        <Tbody>
          {!name
            ? Object.keys(info).map((agency) => (
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
                    <Link href={`/empresa/${info[agency].name}`}>
                      Ver detalle
                    </Link>
                  </Td>
                </Tr>
              ))
            : info[name]?.sales.map((sale) => (
                <Tr>
                  <Td>{sale.name}</Td>
                  <Td>{sale.persons}</Td>
                  <Td>{sale.day}</Td>
                  <Td>{sale.hour}</Td>
                  <Td>
                    {"$" +
                      new Intl.NumberFormat("es-CL", {
                        maximumSignificantDigits: 3,
                      }).format(sale.finalPrice)}
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
