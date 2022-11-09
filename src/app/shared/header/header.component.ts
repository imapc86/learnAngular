import { Component, OnInit } from '@angular/core';
import { SetUserNameService } from 'src/app/modules/first/services/set-userName.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName: string = 'User Name!';

  constructor(private userNameSv: SetUserNameService) { }

  ngOnInit(): void {

    console.log('header');
    this.userNameSv.userRole.subscribe(value => {

      this.userName = value;

    });

  }

}
