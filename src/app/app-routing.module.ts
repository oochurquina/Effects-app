import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ListaComponent } from './users/lista/lista.component';
import { UserComponent } from './users/user/user.component';

const routes : Routes = [
  {
    path: 'home', 
    component: ListaComponent,
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
