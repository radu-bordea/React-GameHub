import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void; // Callback function to handle sort order selection
  sortOrder: string; // Current selected sort order
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // List of available sort orders with their values and labels
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Find the label for the current sort order
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      {/* Button to open the menu, showing the current sort order label */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {/* List of menu items for each sort order */}
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)} // Call the callback with the selected sort order value
            key={order.value} // Unique key for each menu item
            value={order.value} // Value of the menu item
          >
            {order.label} {/* Label displayed in the menu */}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
