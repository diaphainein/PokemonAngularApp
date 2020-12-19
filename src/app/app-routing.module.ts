import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { ReturnToListComponent } from './pokemon/return-to-list/return-to-list.component';

const routes: Routes = [
  { path: 'pokemon-card/:cardName', component: ReturnToListComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: '**', redirectTo: 'pokemon-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
