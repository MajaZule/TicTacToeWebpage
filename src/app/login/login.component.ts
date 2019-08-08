import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser = {};
  firstPlayerName = '';
  secondPlayerName = '';

  constructor(private playerData: PlayerDataService, private router: Router) { }

  ngOnInit() {}

  onNameInput(form: NgForm) {
    // const playerNameValue = form.value;
    // this.firstPlayerName = playerNameValue.name1;
    // this.secondPlayerName = playerNameValue.name2;
  }

  onLogin(form: NgForm) {
    console.log(form);
    // this.playerData.loginFirstPlayer(this.firstPlayerName);
    // this.playerData.loginSecondPlayer(this.secondPlayerName);
    
    // this.router.navigate(['/game-on']);
  }
}
