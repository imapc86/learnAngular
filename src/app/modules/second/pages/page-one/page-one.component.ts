import { Component, OnInit } from '@angular/core';
import { DataEventService } from '../../services/data-event.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(private dataSv: DataEventService) { }

  ngOnInit(): void {
  }

  changeTitle(){
    console.log('M2 - Página one');
    this.dataSv.titulo$.emit('¡Página Uno!');
  }

}
