import { CarPart } from './car-part';

export const CARPARTS: CarPart [] = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99,
    "image": "./images/tires.jpg",
    "imageDesc": "Tires picture",
    "featured": false;
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4,
    "price": 9.99,
    "image": "./images/shocks.jpg",
    "imageDesc": "Shocks picture",
    "featured": true;
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "inStock": 0,
    "price": 24.99,
    "image": "./images/seats.jpg",
    "imageDesc": "Seats picture",
    "featured": false;
  }];
