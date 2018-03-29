import { Injectable } from '@angular/core';
import { CARPARTS }   from './mock-carpart';

@Injectable()
export class RacingDataService {
  getCarParts() {
    return CARPARTS;
  }

  constructor() { }

}
