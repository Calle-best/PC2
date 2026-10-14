import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario = '';
  password = '';
  error = '';

  // Credenciales de demostración (login simulado)
  private readonly USUARIO_DEMO = 'admin';
  private readonly PASSWORD_DEMO = '1234';

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSesion(): void {
    this.error = '';

    // Validaciones básicas
    if (!this.usuario.trim() || !this.password.trim()) {
      this.error = 'Completa usuario y contraseña.';
      return;
    }
    if (this.password.length < 4) {
      this.error = 'La contraseña debe tener al menos 4 caracteres.';
      return;
    }

    if (this.usuario === this.USUARIO_DEMO && this.password === this.PASSWORD_DEMO) {
      this.auth.login(this.usuario, 'Administrador Aroma Andino');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }
}
