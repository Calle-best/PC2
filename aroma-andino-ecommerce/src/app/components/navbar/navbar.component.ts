import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuAbierto = false;

  constructor(public auth: AuthService, private router: Router) {}

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto; // Event binding
  }

  cerrarSesion(): void {
    this.auth.logout();
    this.menuAbierto = false;
    this.router.navigate(['/home']);
  }
}
