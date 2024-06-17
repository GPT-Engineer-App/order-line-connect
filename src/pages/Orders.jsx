import { useState } from "react";
import { Box, Heading, Text, VStack, Select, Input, Button, Divider } from "@chakra-ui/react";

const menuItems = [
  { name: "Crazy InLove", type: "drink" }, { name: "Lets Get Crazy", type: "drink" }, { name: "Crazy as Pinoy", type: "drink" }, { name: "Call Me Crazy", type: "drink" }, { name: "I Just Got Crazy", type: "drink" }, { name: "Crazy Wengweng", type: "drink" }, { name: "Don't Call me Crazy", type: "drink" }, { name: "Shembot", type: "drink" }, { name: "Crazy Dream", type: "drink" }, { name: "Peach Me Up", type: "drink" },
  { name: "Classic", type: "drink" }, { name: "Screwdriver", type: "drink" }, { name: "Long Island", type: "drink" }, { name: "Mojito", type: "drink" }, { name: "Caipirinha", type: "drink" }, { name: "Sex on THe Beach", type: "drink" }, { name: "Cuba Libre", type: "drink" }, { name: "Daiquire", type: "drink" }, { name: "Mai Tai", type: "drink" }, { name: "Classic Martini", type: "drink" }, { name: "Margarita", type: "drink" }, { name: "Manhattan", type: "drink" }, { name: "Oil Fashion", type: "drink" }, { name: "Bullfrog", type: "drink" }, { name: "Tequila Sunrise", type: "drink" }, { name: "Whisky Sour", type: "drink" }, { name: "Blood Mary", type: "drink" }, { name: "Negroni", type: "drink" }, { name: "Pinacolada", type: "drink" }, { name: "Gin Basil", type: "drink" }, { name: "Paloma", type: "drink" }, { name: "Long Island Ice Tea", type: "drink" }, { name: "Aperol Spritz", type: "drink" },
  { name: "Corona", type: "drink" }, { name: "Amstel", type: "drink" }, { name: "Pint Beer", type: "drink" }, { name: "Heineken", type: "drink" },
  { name: "Bombay Saphire", type: "drink" }, { name: "Hendricks", type: "drink" }, { name: "Stochnaya", type: "drink" }, { name: "Absolute", type: "drink" }, { name: "Belveder", type: "drink" }, { name: "Greygoose", type: "drink" }, { name: "Bacardi White", type: "drink" }, { name: "Takamaka Spice Rum", type: "drink" }, { name: "Bacardi Black", type: "drink" }, { name: "El Jimador Tequila", type: "drink" }, { name: "Patron or Don Julio", type: "drink" }, { name: "Dewars or Red Label Blend", type: "drink" }, { name: "Jhonny Walker- Black blend", type: "drink" }, { name: "Jack Daniels", type: "drink" }, { name: "Bulleit Bourbon", type: "drink" }, { name: "Jameson Irish Whisky Single", type: "drink" }, { name: "Chivas 12 blended", type: "drink" },
  { name: "Henessy VSOP", type: "drink" }, { name: "Henessy VS", type: "drink" }, { name: "Alfonso 1", type: "drink" }, { name: "Baileys", type: "drink" }, { name: "Martini ( Red Vermouth)", type: "drink" }, { name: "Martini ( Red Vermouth)", type: "drink" }, { name: "Peach Schnapps", type: "drink" }, { name: "Bols Triple Sec", type: "drink" }, { name: "Cointreau", type: "drink" }, { name: "Grand Marnier", type: "drink" }, { name: "Kahlua", type: "drink" }, { name: "Sambuca", type: "drink" }, { name: "Midori", type: "drink" }, { name: "Malibu", type: "drink" }, { name: "Jagermeister", type: "drink" },
  { name: "Classic Mojito", type: "drink" }, { name: "Passion Fruit Mojito", type: "drink" }, { name: "Strawberry Mojito", type: "drink" }, { name: "Shembot", type: "drink" }, { name: "Kulasim", type: "drink" }, { name: "Coconut Cooler:", type: "drink" }, { name: "Cooers Iced Tea", type: "drink" }, { name: "Lemon Iced Teas", type: "drink" }, { name: "Passion Fruit IceTeas", type: "drink" }, { name: "Strawberry Iced Teas", type: "drink" },
  { name: "Orange", type: "drink" }, { name: "Pinapple", type: "drink" }, { name: "Apple", type: "drink" }, { name: "Cranberry", type: "drink" }, { name: "Lemon", type: "drink" }, { name: "Coke", type: "drink" }, { name: "Coke light", type: "drink" }, { name: "Sprite", type: "drink" }, { name: "RedBull", type: "drink" }, { name: "Tonic Water", type: "drink" }, { name: "Soda Water", type: "drink" }, { name: "Ginger Ale", type: "drink" },
  { name: "Crazy Combo 1", type: "food" }, { name: "Beer & Crispy Pata", type: "food" }, { name: "Crazy Combo 2", type: "food" }, { name: "Beer & Crispy Chicken Wings", type: "food" }, { name: "Crazy Combo 3", type: "food" }, { name: "Beer & Sizzling Sisig", type: "food" }, { name: "Crazy Combo 4", type: "food" }, { name: "Beer & Fried Calamari", type: "food" }, { name: "Crazy Combo 5", type: "food" }, { name: "Beer & Vegetable Spring Roll", type: "food" }, { name: "Crazy Combo 6", type: "food" }, { name: "Beer & French Fries", type: "food" }, { name: "Crazy Combo 7", type: "food" }, { name: "Beer & Lumpianh Shanghai", type: "food" },
  { name: "Caesar Salad", type: "food" }, { name: "Soup of The Day", type: "food" }, { name: "Lumpiang Shanghai:", type: "food" }, { name: "Tokwa't Baboy:", type: "food" }, { name: "Crispy Pata:", type: "food" }, { name: "Sisig:", type: "food" }, { name: "Kinilaw na Tanigue:", type: "food" }, { name: "Chicken Wings", type: "food" }, { name: "Fish Fillet", type: "food" }, { name: "Fried Calamares", type: "food" },
  { name: "Beef Kare-Kare:", type: "food" }, { name: "Sinigang na Hipon:", type: "food" }, { name: "Bulalo:", type: "food" }, { name: "Seafood Kare-Kare:", type: "food" }, { name: "Goto:", type: "food" }, { name: "Cajun", type: "food" }, { name: "Chicken Terayaki", type: "food" }, { name: "Chicken Barbeque", type: "food" }, { name: "Sizzling kare-kare", type: "food" }, { name: "Sizzling SisiG (chicken / beef)", type: "food" }, { name: "Bulalo Steak", type: "food" }, { name: "Sizzling chicken skin sisig", type: "food" }, { name: "Sizzling beef brocolli", type: "food" }, { name: "Beef/chicken stir fry", type: "food" }, { name: "Bangus sisig", type: "food" }, { name: "Sizzling chopsuey", type: "food" }, { name: "Bicol express seafood", type: "food" }, { name: "Sizzling burger steak (beef/chicken)", type: "food" },
  { name: "Club Sandwich", type: "food" }, { name: "Spicy chicken wings, Spring Roll.,Prawn Crackers,Calamari", type: "food" },
  { name: "TapSilog", type: "food" }, { name: "BeefSilog", type: "food" }, { name: "DaigSilog", type: "food" }, { name: "HotSilog", type: "food" },
  { name: "Pancit Canton:", type: "food" }, { name: "Palabok:", type: "food" },
  { name: "Halo-Halo:", type: "food" }, { name: "Leche Flan:", type: "food" }, { name: "Turon:", type: "food" }
];

const Orders = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [barOrders, setBarOrders] = useState([]);
  const [kitchenOrders, setKitchenOrders] = useState([]);

  const handleAddOrder = () => {
    if (selectedItem && quantity > 0) {
      const item = menuItems.find((menuItem) => menuItem.name === selectedItem);
      if (item.type === "drink") {
        setBarOrders([...barOrders, { item: selectedItem, quantity }]);
      } else {
        setKitchenOrders([...kitchenOrders, { item: selectedItem, quantity }]);
      }
      setSelectedItem("");
      setQuantity(1);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Orders Page</Heading>
        <Text>Here you can manage and view all orders.</Text>
        <Select placeholder="Select item" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          {menuItems.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </Select>
        <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} placeholder="Quantity" />
        <Button onClick={handleAddOrder}>Add Order</Button>
        <Divider />
        <Box>
          <Heading size="md">Bar Orders</Heading>
          {barOrders.map((order, index) => (
            <Text key={index}>{order.quantity} x {order.item}</Text>
          ))}
        </Box>
        <Divider />
        <Box>
          <Heading size="md">Kitchen Orders</Heading>
          {kitchenOrders.map((order, index) => (
            <Text key={index}>{order.quantity} x {order.item}</Text>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Orders;