import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featured";
import { featured } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-200">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text>Washington, DC</Text>
          </View>
        </View>
        <View
          className="p-3 rounded-full "
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Sliders height="20" width="20" stroke="white" />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        <View className="mt-8">
          {featured.map((item, index) => {
            return <FeaturedRow item={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
