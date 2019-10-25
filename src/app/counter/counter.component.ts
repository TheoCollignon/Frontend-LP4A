import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = "Compteur 1"
  
  @Input() position;

  constructor(public counterService: CounterService) {}

  ngOnInit() {}

  increment() {
    this.counterService.increment(this.position);
  }

  decrement() {
    this.counterService.decrement(this.position);
  }

}