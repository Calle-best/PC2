import { Component } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService, UsuarioSesion } from '../../services/auth.service';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [NgIf, DatePipe, RouterLink],
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.css',
})
export class MiCuentaComponent {
  usuario: UsuarioSesion | null;

  constructor(private auth: AuthService) {
    this.usuario = this.auth.getUsuario();
  }
}
