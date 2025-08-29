import { Routes } from '@angular/router';
import { SmartParentComponent } from './components/smart/smart-parent/smart-parent';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // redirige al inicio
  { path: 'dashboard', component: SmartParentComponent },      // ruta principal
  { path: '**', redirectTo: 'dashboard' }                      // fallback para rutas desconocidas
];
