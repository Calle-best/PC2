import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css',
})
export class TiendaComponent {
  secciones = [
    { nombre: 'Bebidas', icono: 'bi-cup-hot', texto: 'Café peruano de grano seleccionado.' },
    { nombre: 'Infusiones', icono: 'bi-flower1', texto: 'Muña, anís y hierbas andinas.' },
    { nombre: 'Acompañamientos', icono: 'bi-basket', texto: 'Sándwiches y postres caseros.' },
    { nombre: 'Equipos', icono: 'bi-gear', texto: 'Cafeteras, tazas y accesorios.' },
  ];
}
