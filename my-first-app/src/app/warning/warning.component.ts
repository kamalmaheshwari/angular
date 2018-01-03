import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: '<h3>Warning : This is a warning</h3>',
  styles: [`
  h3{
      color: orange
  }
  `]
})

export class WarningComponent {
}
