import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = `Learning Angular`;
  name = "Daniel" // <- Put your name here!
  buttonText: string = "Click me!";
  disabledButton: boolean = false;
  message: string = "";

  onButtonClick() {
    this.message = "Button was clicked!";
  }
}
