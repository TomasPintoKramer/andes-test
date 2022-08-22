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
  console.log("🚀 ~ file: [name].js ~ line 9 ~ agency ~ info", info);
  const { name } = router.query;
  console.log("🚀 ~ file: [name].js ~ line 8 ~ agency ~ name", name);

  return (
    <Box
      bg="#C4C4C4"
      h='100%'
    >
      <Breadcrumb
        spacing="8px"
        fontWeight="700"
        fontSize="24px"
        p="1.5em"
        pb='1em'
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
