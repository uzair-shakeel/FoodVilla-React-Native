import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSliice"; // Corrected import name

const Dish = ({ dish }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItemsById(state, dish.id));

  const decreaseQuantity = () => {
    dispatch(removeFromCart({ id: dish.id }));
  };

  const increaseQuantity = () => {
    if (cartItems.length > 0) {
      // If the dish exists in the cart, increase its quantity
      dispatch(addToCart({ ...dish, id: dish.id }));
    } else {
      // If the dish doesn't exist in the cart, add it with quantity 1
      dispatch(addToCart({ ...dish, quantity: 1 }));
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
        marginHorizontal: 10,
      }}
    >
      <Image
        source={dish.image}
        style={{ height: 100, width: 100, borderRadius: 20 }}
      />
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dish.name}</Text>
        <Text style={{ color: "#888" }}>{dish.description}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#444" }}>
            ${dish.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {cartItems.length > 0 && (
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={"white"}
                />
              </TouchableOpacity>
            )}
            {cartItems.length > 0 && (
              <Text style={{ marginHorizontal: 10 }}>
                {cartItems[0].quantity}
              </Text>
            )}
            <TouchableOpacity
              onPress={increaseQuantity}
              style={{
                backgroundColor: themeColors.bgColor(1),
                padding: 5,
                borderRadius: 10,
              }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dish;
