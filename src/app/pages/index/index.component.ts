import { Component } from '@angular/core';
import { Pokedex } from '../../pokedex';

@Component({
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  pokemons: any = Pokedex;
  selected: any;

  select(item: any) {
    this.selected = item;
  }
}
