import Pizza from "../assets/images/categories/icons8-pizza-96.png";
import burger from "../assets/images/categories/icons8-hamburger-96.png";
import Italian from "../assets/images/categories/icons8-spaghetti-96.png";
import Chinese from "../assets/images/categories/icons8-takeout-box-96.png";
import Fish from "../assets/images/categories/icons8-tropical-fish-96.png";
import Drink from "../assets/images/categories/icons8-tropical-drink-96.png";
import Restaurant from "../assets/images/restaurants/rawImage (1).jpg";
import Restaurant2 from "../assets/images/restaurants/n7yx-hero (1).jpg";
import Restaurant3 from "../assets/images/restaurants/disadvantages-of-fast-food (1).webp";
import Restaurant4 from "../assets/images/restaurants/bdcd233971b7c81bf77e1fa4471280eb (1).webp";
import Restaurant5 from "../assets/images/restaurants/download (7).jpeg";
import Dish from "../assets/images/dishes/download (1) (1).jpeg";
import Dish2 from "../assets/images/dishes/download (2) (1).jpeg";
import Dish3 from "../assets/images/dishes/download (2) (2).jpeg";
import Dish4 from "../assets/images/dishes/download (3) (2).jpeg";
import Dish5 from "../assets/images/dishes/download (9).jpeg";
import Dish6 from "../assets/images/dishes/download (8).jpeg";

export const categories = [
  {
    id: 1,
    name: "Restaurant",
    image: Pizza,
  },
  {
    id: 2,
    name: "Burger",
    image: burger,
  },
  {
    id: 3,
    name: "Italian",
    image: Italian,
  },
  {
    id: 4,
    name: "Chinese",
    image: Chinese,
  },
  {
    id: 5,
    name: "Fish",
    image: Fish,
  },
  {
    id: 6,
    name: "Drink",
    image: Drink,
  },
];

export const featured = [
  {
    id: 1,
    title: "Breakfast Menu",
    description: "Get the breakfast item ASAP at your doorsteps",
    restaurants: [
      {
        id: 1,
        name: "Lal Qila",
        image: Restaurant, // Assuming Restaurant is imported correctly
        description: "",
        lng: 38.2145602,
        lat: -85.5324269,
        address: "Block 2, Gulistan-e-Johar",
        reviews: "4.4k",
        stars: 4.8,
        category: "BBQ",
        dishes: [
          {
            id: 1,
            name: "Chicken Tikka",
            description: "Tender Chicken Tikka filled with spices.",
            price: 13,
            image: Dish, // Assuming Restaurant is imported correctly
          },
          {
            id: 2,
            name: "Seekh Kebab",
            description: "Juicy Seekh Kebabs cooked to perfection.",
            price: 10,
            image: Dish2, // Assuming Restaurant is imported correctly
          },
          {
            id: 3,
            name: "Vegetable Biryani",
            description: "Flavorful Vegetable Biryani served with raita.",
            price: 15,
            image: Dish3, // Assuming Restaurant is imported correctly
          },
          // Three more dishes added below
          {
            id: 4,
            name: "Mutton Karahi",
            description: "Spicy Mutton Karahi cooked with traditional spices.",
            price: 18,
            image: Dish4, // Assuming Restaurant is imported correctly
          },
          {
            id: 5,
            name: "Paneer Butter Masala",
            description: "Creamy Paneer Butter Masala with a blend of spices.",
            price: 12,
            image: Dish5, // Assuming Restaurant is imported correctly
          },
          {
            id: 6,
            name: "Naan",
            description: "Freshly baked Naan bread.",
            price: 2,
            image: Dish6, // Assuming Restaurant is imported correctly
          },
          // End of additional dishes
        ],
      },
      {
        id: 2,
        name: "Spice Junction",
        image: Restaurant2,
        description: "Experience the rich flavors of Indian cuisine.",
        lng: 2.17403,
        lat: 41.40338,
        address: "Block 5, Gulistan-e-Johar",
        reviews: "3.7k",
        stars: 4.2,
        category: "Indian",
        dishes: [
          {
            id: 1,
            name: "Chicken Tikka",
            description: "Tender Chicken Tikka filled with spices.",
            price: 13,
            image: Dish, // Assuming Restaurant is imported correctly
          },
          {
            id: 2,
            name: "Seekh Kebab",
            description: "Juicy Seekh Kebabs cooked to perfection.",
            price: 10,
            image: Dish2, // Assuming Restaurant is imported correctly
          },
          {
            id: 3,
            name: "Vegetable Biryani",
            description: "Flavorful Vegetable Biryani served with raita.",
            price: 15,
            image: Dish3, // Assuming Restaurant is imported correctly
          },
          // Three more dishes added below
          {
            id: 4,
            name: "Mutton Karahi",
            description: "Spicy Mutton Karahi cooked with traditional spices.",
            price: 18,
            image: Dish4, // Assuming Restaurant is imported correctly
          },
          {
            id: 5,
            name: "Paneer Butter Masala",
            description: "Creamy Paneer Butter Masala with a blend of spices.",
            price: 12,
            image: Dish5, // Assuming Restaurant is imported correctly
          },
          {
            id: 6,
            name: "Naan",
            description: "Freshly baked Naan bread.",
            price: 2,
            image: Dish6, // Assuming Restaurant is imported correctly
          },
          // End of additional dishes
        ],
      },
      {
        id: 3,
        name: "Taste of China",
        image: Restaurant3,
        description: "Savor the flavors of authentic Chinese cuisine.",
        lng: 38.212349,
        lat: -85.536212,
        address: "Block 7, Gulistan-e-Johar",
        reviews: "2.9k",
        stars: 4.0,
        category: "Chinese",
        dishes: [
          {
            id: 1,
            name: "Chicken Tikka",
            description: "Tender Chicken Tikka filled with spices.",
            price: 13,
            image: Dish, // Assuming Restaurant is imported correctly
          },
          {
            id: 2,
            name: "Seekh Kebab",
            description: "Juicy Seekh Kebabs cooked to perfection.",
            price: 10,
            image: Dish2, // Assuming Restaurant is imported correctly
          },
          {
            id: 3,
            name: "Vegetable Biryani",
            description: "Flavorful Vegetable Biryani served with raita.",
            price: 15,
            image: Dish3, // Assuming Restaurant is imported correctly
          },
          // Three more dishes added below
          {
            id: 4,
            name: "Mutton Karahi",
            description: "Spicy Mutton Karahi cooked with traditional spices.",
            price: 18,
            image: Dish4, // Assuming Restaurant is imported correctly
          },
          {
            id: 5,
            name: "Paneer Butter Masala",
            description: "Creamy Paneer Butter Masala with a blend of spices.",
            price: 12,
            image: Dish5, // Assuming Restaurant is imported correctly
          },
          {
            id: 6,
            name: "Naan",
            description: "Freshly baked Naan bread.",
            price: 2,
            image: Dish6, // Assuming Restaurant is imported correctly
          },
          // End of additional dishes
        ],
      },
      {
        id: 4,
        name: "Restaurant Palace",
        image: Restaurant4,
        description: "Indulge in a variety of delicious Restaurants.",
        lng: 38.21082,
        lat: -85.533529,
        address: "Block 9, Gulistan-e-Johar",
        reviews: "3.5k",
        stars: 4.1,
        category: "Restaurant",
        dishes: [
          {
            id: 1,
            name: "Chicken Tikka",
            description: "Tender Chicken Tikka filled with spices.",
            price: 13,
            image: Dish, // Assuming Restaurant is imported correctly
          },
          {
            id: 2,
            name: "Seekh Kebab",
            description: "Juicy Seekh Kebabs cooked to perfection.",
            price: 10,
            image: Dish2, // Assuming Restaurant is imported correctly
          },
          {
            id: 3,
            name: "Vegetable Biryani",
            description: "Flavorful Vegetable Biryani served with raita.",
            price: 15,
            image: Dish3, // Assuming Restaurant is imported correctly
          },
          // Three more dishes added below
          {
            id: 4,
            name: "Mutton Karahi",
            description: "Spicy Mutton Karahi cooked with traditional spices.",
            price: 18,
            image: Dish4, // Assuming Restaurant is imported correctly
          },
          {
            id: 5,
            name: "Paneer Butter Masala",
            description: "Creamy Paneer Butter Masala with a blend of spices.",
            price: 12,
            image: Dish5, // Assuming Restaurant is imported correctly
          },
          {
            id: 6,
            name: "Naan",
            description: "Freshly baked Naan bread.",
            price: 2,
            image: Dish6, // Assuming Restaurant is imported correctly
          },
          // End of additional dishes
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Lunch Menu",
    description: "Enjoy delicious lunch options delivered to your doorstep",
    restaurants: [
      {
        id: 2,
        name: "Spice Junction",
        image: Restaurant2,
        description: "Experience the rich flavors of Indian cuisine.",
        lng: 38.217815,
        lat: -85.533131,
        address: "Block 5, Gulistan-e-Johar",
        reviews: "3.7k",
        stars: 4.2,
        category: "Indian",
        dishes: [
          {
            id: 1,
            name: "Vegetable Biryani",
            description:
              "Fragrant rice cooked with assorted vegetables and spices.",
            price: 14,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Paneer Tikka Masala",
            description:
              "Paneer cubes cooked in a creamy, spiced tomato sauce.",
            price: 13,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Aloo Paratha",
            description:
              "Whole wheat bread stuffed with spiced mashed potatoes.",
            price: 4,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Mutton Curry",
            description:
              "Tender mutton pieces cooked in a flavorful curry sauce.",
            price: 18,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Chana Masala",
            description:
              "Spicy chickpea curry cooked with onions and tomatoes.",
            price: 10,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Raita",
            description:
              "Refreshing yogurt side dish with cucumber and spices.",
            price: 2,
            image: Restaurant,
          },
          // End of dishes for Spice Junction
        ],
      },
      {
        id: 1,
        name: "Lal Qila",
        image: Restaurant,
        description: "",
        lng: 38.2145602,
        lat: -85.5324269,
        address: "Block 2, Gulistan-e-Johar",
        reviews: "4.4k",
        stars: 4.8,
        category: "BBQ",
        dishes: [
          {
            id: 1,
            name: "Chicken Biryani",
            description: "Fragrant rice cooked with tender chicken pieces.",
            price: 15,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Chicken Seekh Kebab",
            description: "Spicy minced chicken skewers grilled to perfection.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Beef Pulao",
            description: "Succulent beef cooked with rice and aromatic spices.",
            price: 18,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Dal Makhani",
            description:
              "Creamy black lentils slow-cooked with spices and butter.",
            price: 10,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Mixed Vegetable Curry",
            description:
              "Assorted vegetables cooked in a rich, flavorful curry sauce.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Garlic Naan",
            description:
              "Soft, fluffy naan bread flavored with garlic and butter.",
            price: 3,
            image: Restaurant,
          },
          // End of dishes for Lal Qila
        ],
      },

      {
        id: 3,
        name: "Taste of China",
        image: Restaurant3,
        description: "Savor the flavors of authentic Chinese cuisine.",
        lng: 38.212349,
        lat: -85.536212,
        address: "Block 7, Gulistan-e-Johar",
        reviews: "2.9k",
        stars: 4.0,
        category: "Chinese",
        dishes: [
          {
            id: 1,
            name: "Sweet and Sour Chicken",
            description:
              "Crispy chicken tossed in a tangy sweet and sour sauce.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Vegetable Manchurian",
            description:
              "Assorted vegetable balls in a savory Manchurian sauce.",
            price: 10,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Szechuan Fried Rice",
            description: "Spicy fried rice with vegetables and Szechuan sauce.",
            price: 9,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Mapo Tofu",
            description: "Spicy tofu and minced meat in a flavorful sauce.",
            price: 11,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Chow Mein",
            description:
              "Stir-fried noodles with vegetables and a choice of meat.",
            price: 10,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Egg Drop Soup",
            description: "Delicious soup with beaten eggs and vegetables.",
            price: 6,
            image: Restaurant,
          },
          // End of dishes for Taste of China
        ],
      },
      {
        id: 4,
        name: "Restaurant Palace",
        image: Restaurant4,
        description: "Indulge in a variety of delicious Restaurants.",
        lng: 38.21082,
        lat: -85.533529,
        address: "Block 9, Gulistan-e-Johar",
        reviews: "3.5k",
        stars: 4.1,
        category: "Restaurant",
        dishes: [
          {
            id: 1,
            name: "Chicken Tikka Restaurant",
            description:
              "Restaurant topped with spicy chicken tikka and mozzarella.",
            price: 13,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Veggie Supreme Restaurant",
            description:
              "Restaurant loaded with assorted vegetables and cheese.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Meat Lovers Restaurant",
            description: "Restaurant packed with assorted meats and cheese.",
            price: 15,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Margarita Restaurant",
            description:
              "Classic Restaurant with tomato, mozzarella, and basil.",
            price: 10,
            image: Restaurant,
          },
          {
            id: 5,
            name: "BBQ Ranch Restaurant",
            description:
              "Restaurant topped with BBQ chicken, ranch dressing, and cheese.",
            price: 14,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Cheese Garlic Bread",
            description: "Buttery garlic bread topped with melted cheese.",
            price: 6,
            image: Restaurant,
          },
          // End of dishes for Restaurant Palace
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Dinner Menu",
    description: "Delight in savory dinner options delivered straight to you",
    restaurants: [
      {
        id: 3,
        name: "Taste of China",
        image: Restaurant3,
        description: "Savor the flavors of authentic Chinese cuisine.",
        lng: 38.212349,
        lat: -85.536212,
        address: "Block 7, Gulistan-e-Johar",
        reviews: "2.9k",
        stars: 4.0,
        category: "Chinese",
        dishes: [
          {
            id: 1,
            name: "Orange Chicken",
            description:
              "Crispy chicken pieces tossed in a tangy orange sauce.",
            price: 13,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Szechuan Beef",
            description: "Tender beef strips cooked in a spicy Szechuan sauce.",
            price: 16,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Vegetable Chow Mein",
            description: "Stir-fried noodles with mixed vegetables.",
            price: 9,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Shrimp Fried Rice",
            description: "Fluffy rice stir-fried with succulent shrimp.",
            price: 14,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Mongolian Beef",
            description:
              "Tender beef slices cooked with scallions and soy sauce.",
            price: 17,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Hot Pot",
            description:
              "Traditional Chinese stew with assorted meats and vegetables.",
            price: 25,
            image: Restaurant,
          },
          // End of dishes for Taste of China
        ],
      },
      {
        id: 4,
        name: "Restaurant Palace",
        image: Restaurant4,
        description: "Indulge in a variety of delicious Restaurants.",
        lng: 38.21082,
        lat: -85.533529,
        address: "Block 9, Gulistan-e-Johar",
        reviews: "3.5k",
        stars: 4.1,
        category: "Restaurant",
        dishes: [
          {
            id: 1,
            name: "Chicken Alfredo Restaurant",
            description:
              "Restaurant topped with creamy Alfredo sauce and grilled chicken.",
            price: 16,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Supreme Restaurant",
            description:
              "Restaurant loaded with assorted meats and vegetables.",
            price: 15,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Mushroom Restaurant",
            description:
              "Restaurant topped with savory mushrooms and mozzarella cheese.",
            price: 13,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Four Cheese Restaurant",
            description: "Restaurant topped with a blend of four cheeses.",
            price: 14,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Spinach and Feta Restaurant",
            description:
              "Restaurant topped with spinach, feta cheese, and garlic.",
            price: 13,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Tiramisu",
            description:
              "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
            price: 8,
            image: Restaurant,
          },
          // End of dishes for Restaurant Palace
        ],
      },
      {
        id: 1,
        name: "Lal Qila",
        image: Restaurant,
        description: "",
        lng: 38.2145602,
        lat: -85.5324269,
        address: "Block 2, Gulistan-e-Johar",
        reviews: "4.4k",
        stars: 4.8,
        category: "BBQ",
        dishes: [
          {
            id: 1,
            name: "Mutton Karahi",
            description: "Spicy Mutton Karahi cooked with traditional spices.",
            price: 18,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Paneer Butter Masala",
            description: "Creamy Paneer Butter Masala with a blend of spices.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Garlic Naan",
            description: "Freshly baked Naan bread flavored with garlic.",
            price: 2,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Chicken Handi",
            description: "Chicken cooked in a rich and creamy gravy.",
            price: 16,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Sizzling Beef Steak",
            description: "Tender beef steak served on a sizzling platter.",
            price: 20,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Shahi Tukda",
            description:
              "Indian bread pudding flavored with cardamom and saffron.",
            price: 8,
            image: Restaurant,
          },
          // End of dishes for Lal Qila
        ],
      },
      {
        id: 2,
        name: "Spice Junction",
        image: Restaurant2,
        description: "Experience the rich flavors of Indian cuisine.",
        lng: 38.217815,
        lat: -85.533131,
        address: "Block 5, Gulistan-e-Johar",
        reviews: "3.7k",
        stars: 4.2,
        category: "Indian",
        dishes: [
          {
            id: 1,
            name: "Chicken Curry",
            description:
              "Tender chicken pieces cooked in a flavorful curry sauce.",
            price: 14,
            image: Restaurant,
          },
          {
            id: 2,
            name: "Palak Paneer",
            description: "Fresh spinach cooked with cottage cheese cubes.",
            price: 12,
            image: Restaurant,
          },
          {
            id: 3,
            name: "Butter Naan",
            description: "Soft and buttery leavened bread.",
            price: 2,
            image: Restaurant,
          },
          {
            id: 4,
            name: "Beef Biryani",
            description: "Fragrant rice cooked with succulent beef pieces.",
            price: 18,
            image: Restaurant,
          },
          {
            id: 5,
            name: "Prawn Masala",
            description: "Juicy prawns cooked in a spicy masala gravy.",
            price: 22,
            image: Restaurant,
          },
          {
            id: 6,
            name: "Gajar Halwa",
            description: "Delicious carrot pudding garnished with nuts.",
            price: 7,
            image: Restaurant,
          },
          // End of dishes for Spice Junction
        ],
      },
    ],
  },
];
