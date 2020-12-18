import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonApiService, PokemonCard } from '../pokemon-api.service';

@Component({
  selector: 'office-cat-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  cardName: string = '';
  card: PokemonCard = {
    name: '',
    height: 0,
    weight: 0,
    moves: [],
    sprites: {
      front_default: ''
    }
  };
  constructor(private pokemonApi: PokemonApiService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((x)=>{this.cardName = x['cardName']});
   }

  ngOnInit(): void {
    this.pokemonApi.getPokemonCard(this.cardName).subscribe((card)=>{
      this.card = card;
    });
  }

}
