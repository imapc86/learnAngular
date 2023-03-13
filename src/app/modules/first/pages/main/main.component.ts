import { Component, OnInit } from '@angular/core';
import { SetNameService } from '../../services/set-name.service';
import { SetUserNameService } from '../../services/set-userName.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userName: string = '';
  public name: string = '';
  public country: string = '';

  constructor(private userNameSv: SetUserNameService, private nameSv: SetNameService) { }

  ngOnInit(): void {
    console.log('En MAIN');
  }

  saveUserName(){

    this.userNameSv.userRole.next(this.userName);

  }

  saveName(){

    this.nameSv.nameSet = this.name;

  }

  saveCountry(){

    //* Este valor no se guardará porque no hay una subscripción previa (Subject):
    this.userNameSv.userCountry.next(this.country);

  }

}
