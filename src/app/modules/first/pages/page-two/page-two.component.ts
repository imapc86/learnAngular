import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { SetUserNameService } from '../../services/set-userName.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  pokemons: any;

  counter: number = 0;

  constructor(private pokeApiSv: PokeApiService, private userNameSv: SetUserNameService) { }

  ngOnInit(): void {

    this.userNameSv.counter.subscribe(contador => {

      this.counter = contador;


    })


    this.pokeApiSv.getPokemons().subscribe(info => {

      this.pokemons = info;
      this.userNameSv.counter.next(this.counter + 1);

    });

  }

}
