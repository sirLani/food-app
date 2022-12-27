import { CompositeNavigationProp } from "@react-navigation/native";
import { IRestaurantCardProps } from "../components/restaurantCard";

export type RootScreenNavigator = {
  Home: undefined;
  Restaurants: { Restaurant: IRestaurantCardProps };
};
