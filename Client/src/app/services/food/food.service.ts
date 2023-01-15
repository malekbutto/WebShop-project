import { Injectable } from '@angular/core';
import { Products } from '../../shared/models/products';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getCategories():String[]{
    return [
      '/assets/Images/Category/Sweets.jpg',
      '/assets/Images/Category/Pastries.jpg',
      '/assets/Images/Category/OurCuisine.jpg',
    ]
  }

  getAllTags(): Tag[]{
    return [
      {name: 'All', count:43},
      {name: 'Sweets', count:20},
      {name: 'Pastries', count:13},
      {name: 'Our Cuisine', count:10},
    ];
  }

  getProductById(id: number): Products{
    return this.getProducts().find(product => product.id ==id)!;

  }

  getProductsByTag(tag: string): Products[]{
    return tag == "All" ?
    this.getProducts() :
    this.getProducts().filter(product => product.tags?.includes(tag));
  }

  getAllProductsBySearchTerm(searchTerm: string): Products[]{
    return this.getProducts().filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getProducts():Products[]{
    return [
      {
        id: 1,
        name: "Trilece Caramel",
        price: 15,
        tags: "Sweets",
        description: "A Turkish sweet cake covered by caramel",
        favorite: true,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Trilece_Caramel2.jpg'
      },
      {
        id: 2,
        name: "Trilece Strawberry",
        price: 15,
        tags: "Sweets",
        description: "A Turkish sweet cake covered by strawberry gel layer",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Trilece_Strawberry.jpg'
      },
      {
        id: 3,
        name: "Trilece Pistachio",
        price: 15,
        tags: "Sweets",
        description: "A Turkish sweet cake covered by pistachio",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Trilece_Pistachio.jpg'
      },
      {
        id: 4,
        name: "Lutos",
        price: 12,
        tags: "Sweets",
        description: "Lutos cake",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Lutos.jpg'
      },
      {
        id: 5,
        name: "Lebanese Nights Dessert",
        price: 15,
        tags: "Sweets",
        description: "Made from a silky semolina based pudding, topped with Ashta (thick cream), whipping cream and pistachios",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Lebanese_Nights_Dessert.jpg'
      },
      {
        id: 6,
        name: "Kinder Bueno",
        price: 12,
        description: "Kinder Bueno cake",
        tags: "Sweets",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Kinder_Bueno.jpg'
      },
      {
        id: 7,
        name: "Tiramisu",
        price: 12,
        tags: "Sweets",
        description: "A coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Tiramisu.jpg'
      },
      {
        id: 8,
        name: "Khash-khash",
        price: 15,
        tags: "Sweets",
        description: "Layered crackers with cream and toasted vermicelli",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Khashkhash.jpg'
      },
      {
        id: 9,
        name: "Alfajores",
        price: 35,
        tags: "Sweets",
        description: "It's a sandwich made of two discs of dough with a filling in between",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Sweets/Alfajores.jpg'
      },
      {
        id: 10,
        name: "Macaron",
        price: 35,
        tags: "Sweets",
        description: "Sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Sweets/Macaron.jpg'
      },
      {
        id: 11,
        name: "Betefour",
        price: 40,
        tags: "Sweets",
        description: "Egyptian butter cookies",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Sweets/Betefour.jpg'
      },
      {
        id: 12,
        name: "Contessa",
        price: 35,
        tags: "Sweets",
        description: "Addictive Arabian cuisine",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Sweets/Contessa.jpg'
      },
      {
        id: 13,
        name: "English Cake",
        price: 35,
        tags: "Sweets",
        description: "The famous English Cake",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/English_Cake.jpg'
      },
      {
        id: 14,
        name: "Dates Cake / Ma'amoul",
        price: 90,
        tags: "Sweets",
        description: "Flour or semolina cakes filled with dates",
        favorite: false,
        stars: 4.5,
        piece: "1 KG",
        imageUrl:'/assets/Images/Category/Sweets/Dates_Cake.jpg'
      },
      {
        id: 15,
        name: "Ghraybeh",
        price: 40,
        tags: "Sweets",
        description: "Delicious and delicate Middle Eastern cookies that melt in your mouth",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Sweets/Ghraybeh.jpg'
      },
      {
        id: 16,
        name: "Sweet Cups",
        price: 4,
        tags: "Sweets",
        description: "Various sweet cups with different tasties",
        favorite: false,
        stars: 4.5,
        piece: "Piece",
        imageUrl:'/assets/Images/Category/Sweets/Cups.jpg'
      },
      {
        id: 17,
        name: "Strawberry Cake",
        price: 120,
        tags: "Sweets",
        description: "Fresh strawberries, this strawberry cake is one of the simplest, most delicious cakes",
        favorite: false,
        stars: 4.5,
        piece: "Cake",
        imageUrl:'/assets/Images/Category/Sweets/Strawberry_Cake.jpg'
      },
      {
        id: 18,
        name: "Ferrero Rocher Cake",
        price: 100,
        tags: "Sweets",
        description: "This Ferrero Rocher Cake is your favorite chocolate hazelnut treat in cake form! Chocolate hazelnut cake layers and with a Nutella buttercream",
        favorite: false,
        stars: 4.5,
        piece: "Cake",
        imageUrl:'/assets/Images/Category/Sweets/Ferrero_Rocher_Cake.jpg'
      },
      {
        id: 19,
        name: "Nutella Cake",
        price: 100,
        tags: "Sweets",
        description: "This Nutella Cake recipe is every Nutella lover’s dream cake! It’s a moist chocolate cake with a rich chocolate Nutella buttercream frosting smothered between each layer",
        favorite: false,
        stars: 4.5,
        piece: "Cake",
        imageUrl:'/assets/Images/Category/Sweets/Nutella_Cake.jpg'
      },
      {
        id: 20,
        name: "Oreo Cake",
        price: 100,
        tags: "Sweets",
        description: "Impressive chocolate cake which layered and topped with Oreo whipped cream",
        favorite: false,
        stars: 4.5,
        piece: "Cake",
        imageUrl:'/assets/Images/Category/Sweets/Oreo_Cake.jpg'
      },
      {
        id: 51,
        name: "Beef Meat",
        price: 40,
        tags: "Pastries",
        description: "Pastry filled with Beef Meat",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Beef_Meat.jpg'
      },
      {
        id: 52,
        name: "Chicken",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Chicken",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Chicken.jpg'
      },
      {
        id: 53,
        name: "Potato",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Potato",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Potato.jpg'
      },
      {
        id: 54,
        name: "Potato Discs",
        price: 35,
        tags: "Pastries",
        description: "Potato discs covered by bread crumbs",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Potato_Discs.jpg'
      },
      {
        id: 55,
        name: "Meat & Potato Discs",
        price: 35,
        tags: "Pastries",
        description: "Potato discs filled with beaf meat, covered by bread crumbs",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Meat_Potato_Discs.jpg'
      },
      {
        id: 56,
        name: "Sausage",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Sausage",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Sausage.jpg'
      },
      {
        id: 57,
        name: "Tuna",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Tuna",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Tuna.jpg'
      },
      {
        id: 58,
        name: "Pizza",
        price: 35,
        tags: "Pastries",
        description: "Pizza Pastry",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Pizza1.jpg'
      },
      {
        id: 59,
        name: "Pizza Filling",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Pizza mix",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Pizza2.jpg'
      },
      {
        id: 60,
        name: "Olives",
        price: 35,
        tags: "Pastries",
        description: "Pastry filled with Olives",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Olives.jpg'
      },
      {
        id: 61,
        name: "Mozzarella Sticks",
        price: 35,
        tags: "Pastries",
        description: "Mozzarella cheese covered by bread crumbs",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/Pastries/Mozzarella_Sticks.jpg'
      },
      {
        id: 62,
        name: "Fatayer",
        price: 65,
        tags: "Pastries",
        description: "Fatayer filled with Spinach or Zaatar",
        favorite: false,
        stars: 4.5,
        piece: "1 KG",
        imageUrl:'/assets/Images/Category/Pastries/Fatayer.jpg'
      },
      {
        id: 63,
        name: "Kibbeh",
        price: 4,
        tags: "Pastries",
        description: "Kibbeh is a family of dishes based on spiced ground meat, onions, and grain, popular in Middle Eastern cuisine. In Levantine cuisine, kibbeh is usually made by pounding bulgur wheat together with meat into a fine paste and forming it into balls with toasted pine nuts and spices",
        favorite: false,
        stars: 4.5,
        piece: "piece",
        imageUrl:'/assets/Images/Category/Pastries/Kibbeh.jpg'
      },
      {
        id: 81,
        name: "Cabbage Roll",
        price: 50,
        tags: "Our Cuisine",
        description: "Filled with rice & Beaf or Lamb meat",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Cabbage_Roll.jpg'
      },
      {
        id: 82,
        name: "Grape leaves",
        price: 50,
        tags: "Our Cuisine",
        description: "Filled with rcse & Beaf or Lamb meat",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Grape_Leaves.jpg'
      },
      {
        id: 83,
        name: "Maftool",
        price: 40,
        tags: "Our Cuisine",
        description: "“Palestinian couscous” with chicken and chickpeas",
        favorite: false,
        stars: 4.5,
        piece: "1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Maftool.jpg'
      },
      {
        id: 84,
        name: "Schnitzel",
        price: 35,
        tags: "Our Cuisine",
        description: "Traditional chicken meat",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Schnitzel.jpg'
      },
      {
        id: 85,
        name: "Shawarma Roll",
        price: 40,
        tags: "Our Cuisine",
        description: "Saj Bread filled with Beaf meat",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Shawarma_Roll.jpg'
      },
      {
        id: 86,
        name: "Shawarma Tortilla",
        price: 40,
        tags: "Our Cuisine",
        description: "Tortilla filled with Shawarma",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Shawarma_Tortilla.jpg'
      },
      {
        id: 87,
        name: "Cheese & Olives Roll",
        price: 40,
        tags: "Our Cuisine",
        description: "Saj Bread filled with Cheese & Olives",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Cheese_Olives_Roll.jpg'
      },
      {
        id: 88,
        name: "Shish_Barak",
        price: 60,
        tags: "Our Cuisine",
        description: "These are Middle Eastern meat filled dumplings cooked in a yogurt based sauce. It is one of the top comfort foods in Arabic cuisine",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Shish_Barak.jpg'
      },
      {
        id: 89,
        name: "Sheikh Al-Mahshi",
        price: 40,
        tags: "Our Cuisine",
        description: "A popular dish in the Middle East consisting of eggplant or zucchini stuffed with minced lamb meat and nuts, bathed in a yogurt sauce or tomato sauce. It is also known as محشي الكوسة باللبن",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 1 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Sheikh_Al_Mahshi.jpg'
      },
      {
        id: 90,
        name: "Sweet Pumpkin",
        price: 40,
        tags: "Our Cuisine",
        description: "Pumpkin cooked and covered by Sugar & Water syrop",
        favorite: false,
        stars: 4.5,
        piece: "Packet - 0.5 KG",
        imageUrl:'/assets/Images/Category/OurCuisine/Sweet_Pumpkin.jpg'
      }
    ]
  }

}
