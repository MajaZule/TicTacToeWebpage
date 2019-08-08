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

  onLogin(form: NgForm) {
    console.log(form);

    const value = form.value;
    this.firstPlayerName = value.name1;
    this.secondPlayerName = value.name2;

    // this.playerData.loginFirstPlayer(this.firstPlayerName);
    // this.playerData.loginSecondPlayer(this.secondPlayerName);
    // console.log(this.firstPlayerName);
    // console.log(this.secondPlayerName);
    
    // this.router.navigate(['/game-on']);
  }
}
