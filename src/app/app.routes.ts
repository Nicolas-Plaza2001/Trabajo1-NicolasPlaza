import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inventario',
    loadComponent: () => import('./inventario/inventario.page').then( m => m.InventarioPage)
  },
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'gestion',
    loadComponent: () => import('./gestion/gestion.page').then( m => m.GestionPage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar/buscar.page').then( m => m.BuscarPage)
  },
  {
    path: 'gestion-devolver',
    loadComponent: () => import('./gestion-devolver/gestion-devolver.page').then( m => m.GestionDevolverPage)
  },
  {
    path: 'gestion-asignar',
    loadComponent: () => import('./gestion-asignar/gestion-asignar.page').then( m => m.GestionAsignarPage)
  },
  {
    path: 'gestion-devolver',
    loadComponent: () => import('./gestion-devolver/gestion-devolver.page').then(m => m.GestionDevolverPage)
  },
  {
    path: 'resultado',
    loadComponent: () => import('./resultado/resultado.page').then( m => m.ResultadoPage)
  },
  {
    path: 'inventario-eliminar-equipo',
    loadComponent: () => import('./inventario-eliminar-equipo/inventario-eliminar-equipo.page').then( m => m.InventarioEliminarEquipoPage)
  },
  {
    path: 'inventario-actualizar-equipo',
    loadComponent: () => import('./inventario-actualizar-equipo/inventario-actualizar-equipo.page').then( m => m.InventarioActualizarEquipoPage)
  },
  {
    path: 'inventario-agregar-equipo',
    loadComponent: () => import('./inventario-agregar-equipo/inventario-agregar-equipo.page').then( m => m.InventarioAgregarEquipoPage)
  },
  {
    path: 'inventario-agregar-equipo-finish',
    loadComponent: () => import('./inventario-agregar-equipo-finish/inventario-agregar-equipo-finish.page').then( m => m.InventarioAgregarEquipoFinishPage)
  },
  {
    path: 'inventario-agregar-empleado',
    loadComponent: () => import('./inventario-agregar-empleado/inventario-agregar-empleado.page').then( m => m.InventarioAgregarEmpleadoPage)
  },
  {
    path: 'inventario-agregar-empleado-finish',
    loadComponent: () => import('./inventario-agregar-empleado-finish/inventario-agregar-empleado-finish.page').then( m => m.InventarioAgregarEmpleadoFinishPage)
  },
  {
    path: 'inventario-actualizar-empleado',
    loadComponent: () => import('./inventario-actualizar-empleado/inventario-actualizar-empleado.page').then( m => m.InventarioActualizarEmpleadoPage)
  },
  {
    path: 'inventario-eliminar-empleado',
    loadComponent: () => import('./inventario-eliminar-empleado/inventario-eliminar-empleado.page').then( m => m.InventarioEliminarEmpleadoPage)
  }

];
