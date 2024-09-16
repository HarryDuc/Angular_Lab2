import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b3.component.html',
  styles: ``
})
export class B3Component {
  a: any = 0;
  Array: any = [];
  inputArray() {
    this.Array.push(Number(this.a));
    console.log(this.Array);
  }
}
