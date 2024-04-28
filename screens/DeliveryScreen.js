import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { featured } from "../constants/index";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import delivery from "../assets/images/bike3.gif";
import peer from "../assets/images/3.jpg";
import * as Icon from "react-native-feather";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";

const DeliveryScreen = () => {
  const rest = useSelector(selectRestaurant);
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: rest.lat,
          longitude: rest.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: rest.lat,
            longitude: rest.lng,
          }}
          title={rest.name}
          description={rest.description}
          pinColor="00215E"
        />
      </MapView>

      <View className="relative bg-white rounded-tl-3xl py-3 -mt-12">
        <View className="flex-row justify-between px-5 pt-18">
          <View>
            <Text className="text-xl text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              15 - 20 Minutes
            </Text>
            <Text className="text-lg text-gray-700 font-semibold">
              Your order is on it's way
            </Text>
          </View>
          <Image source={delivery} className="w-24 h-24" />
        </View>

        <View
          className=" p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
        >
          <View className="p-1 rounded-full">
            <Image source={peer} className="h-16 w-16  rounded-full" />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Peer Momo</Text>
            <Text className="text-md font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone fill={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.X
                onPress={() => navigation.navigate("Home")}
                stroke={"red"}
                strokeWidth={3}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
