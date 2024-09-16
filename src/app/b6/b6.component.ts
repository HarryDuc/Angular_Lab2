import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b6',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b6.component.html',
  styles: ``
})
export class B6Component {
  a: number = 0;
  Array: number[] = [];
  oddNumbers: number[] = [];

  ngauNhien() {
    this.Array = []; // Khởi tạo lại mảng
    this.oddNumbers = []; // Khởi tạo lại mảng số lẻ

    // Tạo mảng Array với các giá trị ngẫu nhiên
    for (let i = 0; i < this.a; i++) {
      this.Array[i] = Math.floor(Math.random() * 100 + 1);
    }

    // Lọc các giá trị lẻ từ Array và thêm vào oddNumbers
    for (let i = 0; i < this.a; i++) {
      if (this.Array[i] % 2 !== 0) {
        this.oddNumbers.push(this.Array[i]);
      }
    }
  }
}
