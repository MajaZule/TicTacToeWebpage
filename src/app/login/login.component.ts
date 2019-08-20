import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  playerName = '';

  constructor(private playerData: PlayerDataService, private router: Router) { }

  ngOnInit() {}

  onNameInput(event: any) {
    this.playerName = (<HTMLInputElement>event.target).value;
    console.log(this.playerName);
  }

  onLogin() {
    console.log("OnLogin");
    this.playerData.login(this.playerName, () => {
      this.router.navigate(['/game-on']);
    });
  }
}
