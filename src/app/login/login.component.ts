import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../login/player-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  playerName = '';

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
    
  }

  onNameInput(event: any) {
    this.playerName = (<HTMLInputElement>event.target).value;
    console.log(this.playerName);
  }

  onLogin() {
    this.playerData.onLogin(this.playerName);
  }

}
