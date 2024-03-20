import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnChanges {

  @Input()
  pokemons: any[] = [];

  data: any;

  currentColorIndex = 0;

  colors:string[] = ['#8CABBE', '#345995', '#E40066', '#03CEA4', '#7F8E71', '#FB4D3D']

  ngOnChanges(changes: SimpleChanges): void {  
    this.data = {
      labels: Object.keys(this.pokemons[0].base),
      datasets: this.pokemons.map(pokemon => ({
        data: Object.values(pokemon.base), 
        label: pokemon.name.french,
        borderColor: this.colors[(this.currentColorIndex++) % this.colors.length],
      }))
    }  
  }
}
