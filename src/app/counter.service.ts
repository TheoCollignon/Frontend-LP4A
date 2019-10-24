import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue = [12, 5, 78];

  constructor() { }

  reset() {
    this.initialValue=[0,0,0];
  }

  increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  }

  decrement(position: number): number {
    this.initialValue[position]--;
    return this.initialValue[position];
  }
}
