import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Rlkjdsflj
      </MenuButton>
      <MenuList>
        <MenuItem>asdf</MenuItem>
        <MenuItem>asdf</MenuItem>
        <MenuItem>a</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
