import { useState } from "react";
import { Box, Heading, Text, VStack, Select, Input, Button } from "@chakra-ui/react";

const menuItems = [
  "Crazy InLove", "Lets Get Crazy", "Crazy as Pinoy", "Call Me Crazy", "I Just Got Crazy", "Crazy Wengweng", "Don't Call me Crazy", "Shembot", "Crazy Dream", "Peach Me Up",
  "Classic", "Screwdriver", "Long Island", "Mojito", "Caipirinha", "Sex on THe Beach", "Cuba Libre", "Daiquire", "Mai Tai", "Classic Martini", "Margarita", "Manhattan", "Oil Fashion", "Bullfrog", "Tequila Sunrise", "Whisky Sour", "Blood Mary", "Negroni", "Pinacolada", "Gin Basil", "Paloma", "Long Island Ice Tea", "Aperol Spritz",
  "Corona", "Amstel", "Pint Beer", "Heineken",
  "Bombay Saphire", "Hendricks", "Stochnaya", "Absolute", "Belveder", "Greygoose", "Bacardi White", "Takamaka Spice Rum", "Bacardi Black", "El Jimador Tequila", "Patron or Don Julio", "Dewars or Red Label Blend", "Jhonny Walker- Black blend", "Jack Daniels", "Bulleit Bourbon", "Jameson Irish Whisky Single", "Chivas 12 blended",
  "Henessy VSOP", "Henessy VS", "Alfonso 1", "Baileys", "Martini ( Red Vermouth)", "Martini ( Red Vermouth)", "Peach Schnapps", "Bols Triple Sec", "Cointreau", "Grand Marnier", "Kahlua", "Sambuca", "Midori", "Malibu", "Jagermeister",
  "Classic Mojito", "Passion Fruit Mojito", "Strawberry Mojito", "Shembot", "Kulasim", "Coconut Cooler:", "Cooers Iced Tea", "Lemon Iced Teas", "Passion Fruit IceTeas", "Strawberry Iced Teas",
  "Orange", "Pinapple", "Apple", "Cranberry", "Lemon", "Coke", "Coke light", "Sprite", "RedBull", "Tonic Water", "Soda Water", "Ginger Ale",
  "Crazy Combo 1", "Beer & Crispy Pata", "Crazy Combo 2", "Beer & Crispy Chicken Wings", "Crazy Combo 3", "Beer & Sizzling Sisig", "Crazy Combo 4", "Beer & Fried Calamari", "Crazy Combo 5", "Beer & Vegetable Spring Roll", "Crazy Combo 6", "Beer & French Fries", "Crazy Combo 7", "Beer & Lumpianh Shanghai",
  "Caesar Salad", "Soup of The Day", "Lumpiang Shanghai:", "Tokwa't Baboy:", "Crispy Pata:", "Sisig:", "Kinilaw na Tanigue:", "Chicken Wings", "Fish Fillet", "Fried Calamares",
  "Beef Kare-Kare:", "Sinigang na Hipon:", "Bulalo:", "Seafood Kare-Kare:", "Goto:", "Cajun", "Chicken Terayaki", "Chicken Barbeque", "Sizzling kare-kare", "Sizzling SisiG (chicken / beef)", "Bulalo Steak", "Sizzling chicken skin sisig", "Sizzling beef brocolli", "Beef/chicken stir fry", "Bangus sisig", "Sizzling chopsuey", "Bicol express seafood", "Sizzling burger steak (beef/chicken)",
  "Club Sandwich", "Spicy chicken wings, Spring Roll.,Prawn Crackers,Calamari",
  "TapSilog", "BeefSilog", "DaigSilog", "HotSilog",
  "Pancit Canton:", "Palabok:",
  "Halo-Halo:", "Leche Flan:", "Turon:"
];

const Orders = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);

  const handleAddOrder = () => {
    if (selectedItem && quantity > 0) {
      setOrders([...orders, { item: selectedItem, quantity }]);
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
            <option key={index} value={item}>{item}</option>
          ))}
        </Select>
        <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} placeholder="Quantity" />
        <Button onClick={handleAddOrder}>Add Order</Button>
        <Box>
          <Heading size="md">Current Orders</Heading>
          {orders.map((order, index) => (
            <Text key={index}>{order.quantity} x {order.item}</Text>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Orders;