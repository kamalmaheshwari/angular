import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .white{
    color: white;
  }`]
})
export class AppComponent {
  visible = true;
  clicks = [];
  count = 0;

  onClick() {
    this.visible = !this.visible;
    this.count++;
     this.clicks.push((new Date()).toTimeString() + ':Button was clicked ' + this.count + ' times');
    // this.clicks.push(this.count);
    console.log(this.count);
  }
}
