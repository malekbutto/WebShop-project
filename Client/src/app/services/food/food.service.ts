import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/Images/Category/Sweets.jpg',
      '/assets/Images/Category/Pastries.jpg',
      '/assets/Images/Category/OurCuisine.jpg',
    ]
  }
}
