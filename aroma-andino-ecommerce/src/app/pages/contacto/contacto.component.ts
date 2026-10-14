import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;

  enviar(): void {
    if (this.nombre && this.correo && this.mensaje) {
      this.enviado = true;
      this.nombre = this.correo = this.mensaje = '';
    }
  }
}
