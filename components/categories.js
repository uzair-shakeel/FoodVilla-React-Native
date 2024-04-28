import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { categories } from "../constants";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category) => {
          let isActive = category.id == activeCategory;
          let btn = isActive ? "bg-gray-700" : "bg-gray-300";
          let txt = isActive ? "font-semibold text-gray-800" : "text-3xl";
          return (
            <View
              key={category.id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                className=" items-center "
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                  className={"p-3 rounded-full " + btn}
                />
                <Text
                  className={
                    isActive ? "font-semibold text-gray-900" : "text-gray-800"
                  }
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Categories;
