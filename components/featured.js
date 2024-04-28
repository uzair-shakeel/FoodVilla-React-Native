import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

const FeaturedRow = ({ item }) => {
  return (
    <View>
      <View className="flex-row items-center px-4 justify-between">
        <View>
          <Text className="text-2xl font-bold">{item.title}</Text>
          <Text className="text-gray-500 text-xs">{item.description}</Text>
        </View>
        <TouchableOpacity className="font-semibold">
          <Text
            style={{ color: themeColors.bgColor(1) }}
            className="font-semibold text-md"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5 "
      >
        {item.restaurants.map((restaurant, index) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
