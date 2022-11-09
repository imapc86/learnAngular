import { Component, OnInit, OnDestroy } from '@angular/core';
import { SetUserNameService } from '../../services/set-userName.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit, OnDestroy {

  public userName!: string;

  public subUserName!: Subscription;

  constructor(private userNameSv: SetUserNameService ) { }

  ngOnInit(): void {

    this.subUserName = this.userNameSv.userRole.subscribe(value => {

      console.log('M1 - Página uno');
      this.userName = value;

    });

  }

  resetUserName(){
    this.userNameSv.userRole.next('Valor Default');
  }

  ngOnDestroy(): void {
    this.subUserName.unsubscribe();
  }

}
