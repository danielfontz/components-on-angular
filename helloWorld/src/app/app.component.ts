import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Hello students</h1>
    <h3>Welcome to Angular</h3>
  `,
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: `h1 { font-size: 3em;}`
})
export class AppComponent {
  title = 'angularcrud';
}
