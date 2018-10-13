import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

import { Pokemon } from '../../models/pokemon'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  pokemons: Array<any>;
  id:number;
  ser:PokemonService;
  constructor(public pokemonService : PokemonService) {
    this.pokemons=pokemonService.getpokemones();
    this.ser=pokemonService;
    this.id=pokemonService.id;
   }

  ngOnInit() {
  }

  
  
}
