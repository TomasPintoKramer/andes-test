import { Box, Text } from "@chakra-ui/react";

const ResultBox = ({ result }) => {
  console.log(
    "🚀 ~ file: ResultBox.js ~ line 4 ~ ResultBox ~ result",
    typeof result
  );

  return (
    <Box
      m="2em"
      width="650px"
      height="160px"
      background="#787878"
      borderRadius="15px"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Text fonts="Roboto" fontWeight="400" fontSize="37px">
        {typeof result === "string" ? "MES" : "EMPRESA"} MAS VENTAS
      </Text>
      <Text fonts="Roboto" fontWeight="400" fontSize="69px" lineHeight="81px">
        {typeof result === "string"
          ? result
          : "$" +
            new Intl.NumberFormat("es-CL", {
              maximumSignificantDigits: 3,
            }).format(result)}
      </Text>
    </Box>
  );
};

export default ResultBox;
