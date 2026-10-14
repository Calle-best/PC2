import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, NgStyle, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, CurrencyPipe, UpperCasePipe, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  categorias: string[] = [];
  busqueda = '';              // [(ngModel)]
  categoriaActiva = 'Todas';
  cargando = true;
  error = false;

  constructor(private productoService: ProductoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Permite llegar desde Tienda con ?categoria=Bebidas
    const cat = this.route.snapshot.queryParamMap.get('categoria');
    if (cat) this.categoriaActiva = cat;

    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.categorias = ['Todas', ...new Set(data.map((p) => p.categoria))];
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      },
    });
  }

  get productosFiltrados(): Producto[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.productos.filter(
      (p) =>
        (this.categoriaActiva === 'Todas' || p.categoria === this.categoriaActiva) &&
        p.nombre.toLowerCase().includes(texto)
    );
  }

  seleccionarCategoria(cat: string): void {
    this.categoriaActiva = cat;
  }

  // Porcentaje de barra de stock (máx. referencial 50)
  porcentajeStock(p: Producto): number {
    return Math.min(100, (p.stock / 50) * 100);
  }
}
