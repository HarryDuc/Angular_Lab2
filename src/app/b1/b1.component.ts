import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  a: number = 0;
  ktnt(a:number) {
    if (a < 2) {
      return 0;
    }
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        return 0;
      }
    }
    return 1;
  }
  lietke() {
    var str = '';
    for (let i = 0; i < this.a; i++) {
      if (this.ktnt(i) == 1) {
        str += i + ' '
      }
    }
    return str;
  }
}
