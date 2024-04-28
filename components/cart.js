import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSliice";

const CartItem = () => {
  const navigation = useNavigation();
  const cartPrice = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length === 0) return null; // Return null when cart is empty

  return (
    <View
      style={{ position: "absolute", bottom: 5, width: "100%", zIndex: 50 }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{
          backgroundColor: themeColors.bgColor(1),
          marginHorizontal: 10,
          marginBottom: 10,

          marginLeft: 30,
          marginRight: 30,
          borderRadius: 100,
          padding: 10,
          paddingHorizontal: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: 20,
              paddingVertical: 6,
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              {cartItems.length}
            </Text>
          </View>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              color: "white",
            }}
          >
            View Cart
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            ${cartPrice.toFixed(2)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
