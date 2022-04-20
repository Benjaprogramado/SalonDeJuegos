import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { QuiensoyComponent } from './page/quiensoy/quiensoy.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'quiensoy', component:QuiensoyComponent },
  { path: 'home', component:HomeComponent },
  {
    path: 'juegos', component: JuegosComponent, children: [
      { path: 'tateti', component: TatetiComponent }
      ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
