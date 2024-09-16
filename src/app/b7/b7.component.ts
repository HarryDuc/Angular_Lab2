import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './b7.component.html',
  styles: ``
})
export class B7Component {
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
    for (let i = 1; i < this.a; i++) {
      if (Math.sqrt(this.Array[i]) % 1 == 0) {
        this.oddNumbers.push(this.Array[i]);
      }
    }
  }
}
