import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css',
})
export class OfertasComponent implements OnInit {
  ofertas: Producto[] = [];
  descuento = 0.2; // 20 % de descuento
  error = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => (this.ofertas = data.filter((p) => p.oferta)),
      error: () => (this.error = true),
    });
  }

  precioOferta(p: Producto): number {
    return p.precio * (1 - this.descuento);
  }
}
