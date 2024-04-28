import React, { useEffect } from "react";
import { View, Image } from "react-native";
import delivery from "../assets/images/loading page.gif";
import { useNavigation } from "@react-navigation/native";
const OrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 800);
  });
  return (
    <View className="bg-white h-full justify-center items-center">
      <Image source={delivery} className="h-80  w-80 " />
    </View>
  );
};

export default OrderScreen;
