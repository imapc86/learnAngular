import { Component, OnInit } from '@angular/core';
import { DataEventService } from '../../services/data-event.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(private dataSv: DataEventService) { }

  ngOnInit(): void {
  }

  changeTitle(){
    console.log('M2 - Página two');
    this.dataSv.titulo$.emit('¡Página dos!');
  }

}
