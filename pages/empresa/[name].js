import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ResultTable from "../../Commons/ResultTable";
import { ChevronRightIcon } from "@chakra-ui/icons";

const agency = () => {
  const router = useRouter();
  const info = useSelector((state) => state.gralData);
  const { name } = router.query;

  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        fontWeight="700"
        p="1.5em"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Empresa</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ResultTable info={info} />
    </Box>
  );
};

export default agency;
