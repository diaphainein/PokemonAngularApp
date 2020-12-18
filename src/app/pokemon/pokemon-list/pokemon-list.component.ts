import { Component, OnInit } from '@angular/core';
import { PokemonApiService, PokemonListItem, PokemonListResult } from '../pokemon-api.service';

@Component({
  selector: 'office-cat-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: Array<PokemonListItem> | undefined;
  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  private getPokemons() {
    this.pokemonApi.getPokemonList().subscribe((result)=>{
      this.pokemonList = result.results;
    })
  }
}
