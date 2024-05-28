import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home"; 
import Cardapio from "./Card/Card";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Cardapio" component={Cardapio} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
