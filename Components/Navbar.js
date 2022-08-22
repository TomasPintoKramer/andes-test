import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="9"
      width="100%x"
      height="78px"
      left="0px"
      background="#868686"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="https://github.com/TomasPintoKramer">
          <a>
        <Text
        pl='2em'
        fonts='Roboto'
        fontWeight="400"
        fontSize="24px"
        lineHeight='28px'>
            Tomas Pinto Kramer
        </Text>
            </a>
      </Link>
    </Box>
  );
};

export default Navbar;
