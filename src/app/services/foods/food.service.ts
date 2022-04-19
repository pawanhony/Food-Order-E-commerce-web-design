import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

// Food get by ID

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

// for searching ****************************************************

  getAll():Foods[]{
    return [
      {
        id: 1,
        price:10,
        name:'Pizza',
        favorite: false,
        star:4,
        tags:['FastFood', 'Pizza', 'Lunch'],
        imageUrl:'/assets/1.jpg',
        cookTime:'10-20',
        origins:'Itly',
      },
      {
        id: 2,
        imageUrl:'/assets/2.jpg',
        name:'MeatBall',
        favorite: false,
        origins:'Itly',
        price:15,
        tags:['FastFood', 'Meatball', 'Lunch'],
        cookTime:'20-30',
        star:4,
      },
      {
        id: 3,
        price:8,
        name:'Burger',
        favorite: false,
        star:4,
        tags:['FastFood', 'Burger', 'Lunch'],
        imageUrl:'/assets/3.jpg',
        cookTime:'10-20',
        origins:'US',
      },
      {
        id: 4,
        price:5,
        name:'Chilli Potato',
        favorite: false,
        star:4,
        tags:['FastFood', 'Fried Potato', 'Lunch'],
        imageUrl:'/assets/4.jpg',
        cookTime:'10-20',
        origins:'Itly,Indian',
      },
      {
        id: 5,
        price:8,
        name:'Chawmin',
        favorite: false,
        star:4.5,
        tags:['FastFood', 'Chawmin', 'Lunch'],
        imageUrl:'/assets/5.jpg',
        cookTime:'10-20',
        origins:'Chines,Indian',
      },
      {
        id: 6,
        price:15,
        name:'Paneer Masala',
        favorite: false,
        star:4,
        tags:['FastFood', 'Paneer', 'Masala', 'Dinner'],
        imageUrl:'/assets/6.jpg',
        cookTime:'20-30',
        origins:'Indian',
      },
      {
        id: 7,
        price:8,
        name:'Momos',
        favorite: false,
        star:4,
        tags:['FastFood'],
        imageUrl:'/assets/7.jpg',
        cookTime:'10-20',
        origins:'Chines',
      },
      {
        id: 8,
        price:15,
        name:'Fried Chicken',
        favorite: false,
        star:4.5,
        tags:['Starter', 'Fried Chicken'],
        imageUrl:'/assets/8.jpg',
        cookTime:'20-30',
        origins:'Itly',
      },
    ];
  }


  // for Filter *****************************************

  getAllFoodsbyTag(tag:string): Foods[] {
    return tag == "All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name:'All', count: 14},
      { name:'Pizza', count:3},
      { name:'FastFood', count: 5},
      { name:'Lunch', count: 2},
      { name:'SlowFood', count: 3},
      { name:'Burger', count: 1},
      { name:'Fry', count: 1},
      { name:'Soup', count: 1},
    ]
  }
}
