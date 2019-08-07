import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from 'node_modules/@angular/common/http';

interface StateData {
  PlayerID: string;
  SessionID: string;
  Players: string[];
  State;
  Grid;
  Timer: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  playerName = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onNameInput(event: any) {
    this.playerName = (<HTMLInputElement>event.target).value;
    console.log(this.playerName);
  }

  onLogin(playerName: any) {
    return this.http.post(
      'http://127.0.0.1:8080', playerName
    ).subscribe((responseData: StateData) => {
      console.log(responseData);
    });
  }
}
