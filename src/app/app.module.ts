import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { PokemonComponent } from './components/home/pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'detalles', component: DetallesComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesComponent,
    PokemonComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
