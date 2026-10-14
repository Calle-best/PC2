# Aroma Andino — E-commerce en Angular (PC2 · JavaScript Avanzado · UTP)

Tienda en línea de café peruano, infusiones andinas y acompañamientos artesanales.
Tecnologías: **Angular 17, Bootstrap 5, JSON Server, HTML, CSS y TypeScript**.

## Integrantes
- Mamani Calle, Nestor
- Useca Aguilar, Juan
- Yesquen Nunura, Lesly Tatiana
- Villegas Aguilar, Ismael
- Gomez Gallardo, Eduardo

## Cómo ejecutarlo
```bash
npm install
npm run api      # Terminal 1 → JSON Server en http://localhost:3000
npm start        # Terminal 2 → Angular en http://localhost:4200
```
**Login de demostración:** usuario `admin` · contraseña `1234`

## Páginas
Home · Productos · Ofertas · Tienda · Contacto · Mi Cuenta · Login · Dashboard (protegido) · 404

## Requisitos cubiertos
| Requisito | Dónde |
|---|---|
| Navbar / Footer reutilizables | `components/navbar`, `components/footer` |
| Routing, 404, redirección | `app.routes.ts`, `guards/auth.guard.ts` |
| Login simulado + LocalStorage | `pages/login`, `services/auth.service.ts` |
| Interpolación, property/event binding, `[(ngModel)]` | Productos, Login, Contacto |
| `*ngFor`, `*ngIf`, `[ngClass]`, `[ngStyle]` | Productos, Navbar, Dashboard |
| Pipes (currency, date, uppercase) | Productos, Ofertas, Footer, Dashboard |
| Bootstrap (grid, cards, navbar, forms, botones, tablas) | Todo el proyecto |
| JSON Server + servicios REST | `db.json`, `services/producto.service.ts` |

## Despliegue
- **Netlify:** `npm run build` y subir `dist/aroma-andino-ecommerce/browser` (incluye `_redirects`).
- **Vercel:** importar el repo; incluye `vercel.json`.
- **GitHub Pages:** `ng build --base-href /NOMBRE-REPO/` y copiar `index.html` a `404.html`.

> JSON Server corre en local. Para que Productos funcione en línea, despliega la API
> aparte (ej. Render) y cambia `apiUrl` en `src/app/services/producto.service.ts`.
