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
  public subCountry!: Subscription;

  subCounter!: Subscription;

  counter: number = 0;

  get name(){

    return this.nameSv.name;
    
  }

  constructor(private userNameSv: SetUserNameService,private nameSv: SetNameService ) { }

  ngOnInit(): void {

    this.subUserName_0 = this.userNameSv.userRole.subscribe(value => {

      console.log('M1 - Página uno');
      this.userName = value;

    });

    this.subCounter = this.userNameSv.counter.subscribe(value => { 
    
      console.log(value);
      this.counter = value; 
    
    });

    this.subCountry = this.userNameSv.userCountry.subscribe(value => {

      console.log({value, 'counter': this.counter});
      this.userCountry = value;
      this.userNameSv.counter.next(this.counter+1);

    })

  }

  resetUserName(){
    this.userNameSv.userRole.next('Valor Default');
  }


  setCountry(){
    
    this.userNameSv.userCountry.next('México');

  }

  ngOnDestroy(): void {
    this.subUserName_0.unsubscribe();
    this.subCountry.unsubscribe();

    this.subCounter.unsubscribe();
  }

}
