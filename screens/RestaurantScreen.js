import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import stars from "../assets/images/77e866665784f9975e3df54c07d2bd1e.png";
import Dish from "../components/dish";
import CartItem from "../components/cart";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let restaurant = params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (restaurant && restaurant.id) {
      dispatch(setRestaurant({ ...restaurant }));
    }
  }, []);

  return (
    <View>
      <CartItem />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image source={restaurant.image} className="h-48 w-full" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image source={stars} className="h-4 w-4" />
                <Text className="text-xs ">
                  <Text className="text-green-700 mr-2">
                    {restaurant.stars}{" "}
                  </Text>
                  <Text className="text-gray-700 px-2">
                    ({restaurant.reviews} review) *{" "}
                    <Text className="font-semibold ">
                      {" "}
                      {restaurant.category}
                    </Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin width="15" height="15" color="gray" />
                <Text className="text-gray-700 px-2">{restaurant.address}</Text>
              </View>
            </View>
            <Text>{restaurant.description}</Text>
          </View>
        </View>
        <View className="bg-white pb-36">
          <Text className="px-4 text-2xl font-bold py-4">Menu</Text>
          {restaurant.dishes.map((dish, index) => (
            <Dish dish={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
