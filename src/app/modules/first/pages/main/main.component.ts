import { Component, OnInit } from '@angular/core';
import { SetUserNameService } from '../../services/set-userName.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userName: string = '';

  constructor(private userNameSv: SetUserNameService) { }

  ngOnInit(): void {
  }

  saveRole(){

    this.userNameSv.userRole.next(this.userName);

  }

}
