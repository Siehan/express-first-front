import { Box, Link, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import MobileNavigation from "./MobileNavigation";
import NavigationListItems from "./NavigationListItems";
import SwitchColorMode from "./SwitchColorMode";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import node from "../assets/images/node.png";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <>
      <Box
        as="nav"
        mx="auto"
        display="flex"
        alignItems="center"
        sx={{
          "a:hover": {
            textDecoration: "none",
            color: "darkorange",
          },
        }}
        py="3"
        px={[4, 6, 10, 14, 20]}
        w="100%"
        bg={bg}
        position="fixed"
        zIndex="sticky"
        borderRadius="md"
        bgGradient="linear(to-r, #4FAA1B, #4FAA1B)"
      >
        <Wrap>
          <WrapItem>
            <Avatar marginX="4" size="md" name="Node" img src={node} alt="Logo node" />
          </WrapItem>
        </Wrap>

        <Link href="/" fontWeight="bold" fontSize="xl" mr="auto">
          Node Express
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Box>
    </>
  );
};

export default Navigation;
