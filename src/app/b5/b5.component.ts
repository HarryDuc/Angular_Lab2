import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b5.component.html',
  styles: ``
})
export class B5Component {
  a: any;
  Array: any = [];
  ngauNhien() {

    this.Array = [];
    let minValue = 1;
    for (let i = 0; i < this.a; i++) {
      let random = Math.floor(Math.random() * (100 - minValue + 1)) + minValue;
      this.Array[i] = random;
      minValue = random;
    }
  }
}
