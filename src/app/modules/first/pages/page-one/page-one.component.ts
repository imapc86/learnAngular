import { Component, OnInit, OnDestroy } from '@angular/core';
import { SetUserNameService } from '../../services/set-userName.service';
import { Subscription } from "rxjs";
import { SetNameService } from '../../services/set-name.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit, OnDestroy {

  public userName!: string;
  public userCountry!: string;

  public subUserName_0!: Subscription;
  public subUserName_1!: Subscription;

  get name(){

    return this.nameSv.name;
    
  }

  constructor(private userNameSv: SetUserNameService,private nameSv: SetNameService ) { }

  ngOnInit(): void {

    this.subUserName_0 = this.userNameSv.userRole.subscribe(value => {

      console.log('M1 - Página uno');
      this.userName = value;

    });

    this.subUserName_1 = this.userNameSv.userCountry.subscribe(value => {

      this.userCountry = value;

    })

  }

  resetUserName(){
    this.userNameSv.userRole.next('Valor Default');
  }


  setCountry(){

    this.userNameSv.userCountry.next('País default');

  }

  ngOnDestroy(): void {
    this.subUserName_0.unsubscribe();
    this.subUserName_1.unsubscribe();
  }

}
