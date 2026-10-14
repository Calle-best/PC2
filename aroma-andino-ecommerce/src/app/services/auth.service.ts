import { Injectable } from '@angular/core';

export interface UsuarioSesion {
  usuario: string;
  nombre: string;
  fechaIngreso: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'aromaAndinoUsuario';

  /**
   * Simula un inicio de sesión guardando los datos del usuario en LocalStorage.
   * Funcionalidad obligatoria: "Al iniciar sesión correctamente, guardar
   * información en LocalStorage".
   */
  login(usuario: string, nombre: string): void {
    const sesion: UsuarioSesion = {
      usuario,
      nombre,
      fechaIngreso: new Date().toISOString(),
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sesion));
  }

  /** Cierra la sesión eliminando los datos guardados. */
  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /** true si existe una sesión simulada activa en LocalStorage. */
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  /** Devuelve los datos del usuario logueado, o null si no hay sesión. */
  getUsuario(): UsuarioSesion | null {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UsuarioSesion) : null;
  }
}
