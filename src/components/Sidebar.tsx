import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AccountsIcon,
  ContactIcon,
  DashboardIcon,
  DollorIcon,
  ReportIcon,
  UserIcon,
} from "../assets/svg/svg";
import { useState } from "react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(0);

  return (
    <Box>
      <Button onClick={onOpen}>Menu</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerContent>
          <DrawerCloseButton display={["null", "null", "null", "none"]} />
          <DrawerHeader>
            <Image
              w={40}
              margin={"auto"}
              src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
              alt="logo"
            />
          </DrawerHeader>

          <DrawerBody p={0} m={0} mt={5}>
            <Stack spacing={"0.5px"}>
              {/* dashboard */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 0 ? "#47B747" : "white"}
                color={active === 0 ? "white" : "black"}
                onClick={() => setActive(0)}
              >
                <Box width={5} height={5}>
                  <DashboardIcon />
                </Box>
                <Text>Dashboard</Text>
              </HStack>

              {/* accounts */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 1 ? "#47B747" : "white"}
                color={active === 1 ? "white" : "black"}
                onClick={() => setActive(1)}
              >
                <Box width={5} height={5}>
                  <AccountsIcon />
                </Box>
                <Text>Accounts</Text>
              </HStack>

              {/* payroll */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 2 ? "#47B747" : "white"}
                color={active === 2 ? "white" : "black"}
                onClick={() => setActive(2)}
              >
                <Box width={5} height={5}>
                  <DollorIcon />
                </Box>
                <Text>Payroll</Text>
              </HStack>

              {/* report */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 3 ? "#47B747" : "white"}
                color={active === 3 ? "white" : "black"}
                onClick={() => setActive(3)}
              >
                <Box width={5} height={5}>
                  <ReportIcon />
                </Box>
                <Text>Reports</Text>
              </HStack>

              {/* user */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 4 ? "#47B747" : "white"}
                color={active === 4 ? "white" : "black"}
                onClick={() => setActive(4)}
              >
                <Box width={5} height={5}>
                  <UserIcon />
                </Box>
                <Text>Advisor</Text>
              </HStack>

              {/* contact */}
              <HStack
                _hover={{ backgroundColor: "#47B747", color: "white" }}
                py="16px"
                pl={10}
                cursor={"pointer"}
                fontWeight={"semibold"}
                transition="0.2s all ease-in-out"
                backgroundColor={active === 5 ? "#47B747" : "white"}
                color={active === 5 ? "white" : "black"}
                onClick={() => setActive(5)}
              >
                <Box width={5} height={5}>
                  <ContactIcon />
                </Box>
                <Text>Contacts</Text>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
