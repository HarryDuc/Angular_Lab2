import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b4.component.html',
  styles: ``
})
export class B4Component {
  a: any;
  Array: any = [];
  ngauNhien() {
    for (let i = 0; i < this.a; i++) {
      this.Array[i] = Math.floor(Math.random() * 100 + 1);
    }
  }
}
