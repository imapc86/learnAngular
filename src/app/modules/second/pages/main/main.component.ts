import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataEventService } from '../../services/data-event.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public title: string = 'Página principal (Main)';

  public subscriptionName!: Subscription;

  constructor(
    //private dataSv: DataEventService,
    public dataService: DataEventService
  ) { }

  ngOnInit(): void {

    // this.subscriptionName = this.dataSv.titulo$.subscribe( mensaje => {

    //   console.log('M2 - Página Main');
    //   this.title = mensaje;
      
    // });
  }

  ngOnDestroy(): void {

    // this.subscriptionName.unsubscribe();

  }

}
