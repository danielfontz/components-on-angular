import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showLogo:boolean = true;
  menuItems = [
    { label: 'Home', link: '' },
    { label: 'Sign Up', link: '/profile/include' },
    { label: 'Login', link: '/profile/login' },
    { label: 'About', link: '/about' },
    { label: 'Help', link: '/help' }
  ];
}
