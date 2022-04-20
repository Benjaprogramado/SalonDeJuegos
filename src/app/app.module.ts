import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { HomeComponent } from './page/home/home.component';
import { QuiensoyComponent } from './page/quiensoy/quiensoy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    JuegosComponent,
    TatetiComponent,
    PreguntadosComponent,
    HomeComponent,
    QuiensoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
