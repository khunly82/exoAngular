import { Component } from '@angular/core';
import { Pokedex } from '../../pokedex';

@Component({
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  pokemons: any = Pokedex;
  selectedItems: any[] = [];

  select(item: any) {
    this.selectedItems = [...this.selectedItems, item];
  }
}
