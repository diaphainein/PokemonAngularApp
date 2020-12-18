import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  /**
   * getPokemonList
   */
  public getPokemonList() {
    return this.http.get<PokemonListResult>('https://pokeapi.co/api/v2/pokemon');    
  }
  public getPokemonCard(cardName:string) {
    return this.http.get<PokemonCard>(`https://pokeapi.co/api/v2/pokemon/${cardName.toLowerCase()}`);
  }
}

export interface PokemonListResult {
  results: Array<PokemonListItem>;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonCard {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonCardImage;
  moves: PokemonCardMoves[];
}

export interface PokemonCardImage {
  front_default: string;
}

export interface PokemonCardMoves {
  move: PokemonCardMoveName;
}

export interface PokemonCardMoveName {
  name: string;
}
