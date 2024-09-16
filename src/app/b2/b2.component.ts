import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b2',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-5">
          <div class="card">
            <div class="card-header text-center text-primary">
              <h3>Liet ke cac so chinh phuong nho hon N.</h3>
            </div>
            <div class="card-body">
              <input type="number" class="form-control" [(ngModel)]="a">
            </div>
            <div class="card-footer text-muted">
              <p>Cac so chinh phoung: {{lietke()}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class B2Component {
  a: number = 0;
  KTCP(C: number){
    var n=Math.floor(Math.sqrt(C));
    if(n*n==C) return 1;
    return 0;
  }
  lietke() {
    var str = '';
    for (let i = 0; i < this.a; i++) {
      if (this.KTCP(i) == 1) {
        str += i + ' '
      }
    }
    return str;
  }
}
