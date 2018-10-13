import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { Pokemon } from '../../../models/pokemon'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: Array<any>;

  taskToEdit: Pokemon;
  ser:PokemonService;
  id: number;


  constructor(public pokemonService : PokemonService) {
   this.ser=pokemonService;
    this.pokemons=pokemonService.getpokemones();
    
   }

  ngOnInit() {
    console.log(this.pokemons[1]);
  }

  Pasarid(id:number){
    this.ser.cambiaid(id);
  }

}
