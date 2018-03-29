import { Component, OnInit }  from '@angular/core';
import { CarPart }            from './car-part';
import { CARPARTS }           from '../mock-carpart';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {
  carParts: CarPart[];

  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }

  downQuantity(carPart) {
    if (carPart.quantity != 0) carPart.quantity--;
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  constructor() { }

  ngOnInit() {
    this.carParts = CARPARTS;
  }

}
