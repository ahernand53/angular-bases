import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h1>Counter</h1>
<h3>Counter: {{counter}}</h3>
<hr>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCount()">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>
`
  ,
})
export class CounterComponent {
  public counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCount(): void {
    this.counter = 10;
  }
}
