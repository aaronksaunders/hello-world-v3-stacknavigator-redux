import React from "react";
import { createStackNavigator } from "react-navigation"; // Version can be specified in package.json

// SCREENS
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";

// react-redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import ShoppingStore from "./redux/shopping-store";

const store = createStore(ShoppingStore)

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});

export default (Root = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
});
