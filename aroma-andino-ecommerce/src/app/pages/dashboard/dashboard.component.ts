import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DatePipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, UsuarioSesion } from '../../services/auth.service';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  usuario: UsuarioSesion | null = null;
  productos: Producto[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.usuario = this.auth.getUsuario();
    this.productoService.getProductos().subscribe((data) => (this.productos = data));
  }

  get totalProductos(): number { return this.productos.length; }
  get totalOfertas(): number { return this.productos.filter((p) => p.oferta).length; }
  get stockBajo(): Producto[] { return this.productos.filter((p) => p.stock <= 5); }
  get valorInventario(): number {
    return this.productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
  }

  cerrarSesion(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
