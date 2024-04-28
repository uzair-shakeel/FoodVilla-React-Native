import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { featured } from "../constants/index";
import delivery from "../assets/images/cute-food.gif";
import delivery2 from "../assets/images/Ramen-noodle-gif.gif";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
} from "../slices/cartSliice";

const CartScreen = () => {
  const navigation = useNavigation();
  const cartPrice = useSelector(selectCartTotal);
  const rest = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const [groupitems, setGroupItems] = useState({});
  const dispatch = useDispatch();

  const decreaseQuantity = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute top-8 left-4 bg-gray-50 rounded-full shadow p-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-center font-bold text-2xl">Cart</Text>
        <Text className="text-center text-gray-600 text-lg">{rest.name}</Text>
      </View>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row items-center px-4 mt-3"
      >
        <Image source={delivery} className="w-24 h-24 " />
        <Text className="flex-1 pl-4">Deliver in 10 - 20 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.bgColor(1) }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white gap-2 pt-5 mx-1"
      >
        {Object.entries(groupitems).map(([id, dishes]) => {
          return dishes.map((dish, index) => (
            <View
              key={`${id}_${index}`}
              className="flex-row items-center border-gray-200 border-2 space-x-3 py-2 px-4 bg-white rounded-xl"
            >
              <Text className="font-bold">{dish.quantity} x</Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                onPress={() => decreaseQuantity(dish.id)}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus strokeWidth={3} width={20} stroke={"white"} />
              </TouchableOpacity>
            </View>
          ));
        })}
      </ScrollView>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.5) }}
        className="p-4 px-8 space-y-2 rounded-tr-[40px] rounded-tl-[40px]"
      >
        <View className="flex-row text-gray-700 justify-between">
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">${cartPrice.toFixed(2)}</Text>
        </View>
        <View className="flex-row text-gray-700 justify-between">
          <Text className="text-gray-700">Delivery</Text>
          <Text className="text-gray-700">$0</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-gray-800">Total</Text>
          <Text className="font-bold text-gray-800">
            ${cartPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Text className="text-white text-center font-bold text-lg">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
