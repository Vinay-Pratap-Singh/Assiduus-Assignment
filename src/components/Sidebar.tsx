import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { DashboardIcon } from "../assets/svg/svg";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>Menu</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerContent>
          <DrawerCloseButton display={["null", "null", "null", "none"]} />
          <DrawerHeader borderBottomWidth="1px">
            <Image
              src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
              alt="logo"
            />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <HStack>
                <DashboardIcon />
                <Text>Dashboard</Text>
              </HStack>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
