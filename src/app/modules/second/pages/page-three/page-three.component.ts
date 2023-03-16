import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  limit:number = 10;
  currentPage:number = 1;
  totalPages: number = 0;

  pokemons: any;

  constructor(private pokeApiSv: PokeApiService) { }

  ngOnInit(): void {

    this.getPokemons(0);

  }

  getPokemons(offset:number){

    this.pokeApiSv.getPokemons(offset, this.limit).subscribe((res:any)=> {

      this.totalPages = Math.ceil(res.count/this.limit);
      this.pokemons = res.results;

    });

  }

  changePage(page: number){

    this.currentPage = page;
    this.getPokemons((page - 1) * this.limit);

  }

}
