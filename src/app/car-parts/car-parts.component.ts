import { Component, OnInit }  from '@angular/core';
import { CarPart }            from './car-part';
import { CARPARTS }           from '../mock-carpart';
import { RacingDataService }  from '../racing-data.service';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {
  carParts: CarPart[];

  totalCarParts() {
    let sum = 0;

    if (Array.isArray(this.carParts)) {
      for (let carPart of this.carParts) {
        sum += carPart.inStock;
      }
    }
    return sum;
  }

  downQuantity(carPart) {
    if (carPart.quantity != 0) carPart.quantity--;
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  }

  constructor(private racingDataService: RacingDataService) { }

  ngOnInit() {
    this.racingDataService.getCarParts()
        .subscribe(carParts => this.carParts = carParts);
  }

}
