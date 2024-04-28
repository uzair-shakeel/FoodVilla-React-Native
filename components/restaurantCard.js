import React from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import stars from "../assets/images/77e866665784f9975e3df54c07d2bd1e.png";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import themeColors from "../theme/index";

const RestaurantCard = ({ restaurant, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...restaurant })}
      key={index}
    >
      <View
        style={{ shadowColor: "000", shadowRadius: 7 }}
        className="mr-2 shadow-lg 
        "
        key={restaurant.id}
      >
        <Image source={restaurant.image} className="h-36 w-64 rounded-t-3xl" />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={stars} className="h-4 w-4" />
            <Text className="text-xs ">
              <Text className="text-green-700 mr-2">{restaurant.stars} </Text>
              <Text className="text-gray-700 px-2">
                ({restaurant.reviews} review) *{" "}
                <Text className="font-semibold "> {restaurant.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin width="15" height="15" color="gray" />
            <Text className="text-gray-700 px-2">{restaurant.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RestaurantCard;
