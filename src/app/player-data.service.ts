import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from 'node_modules/@angular/common/http';


export interface GridSymbol {
  Empty: number,
  Cross: number,
  Circle: number
}

export interface State {
  Wait: number;
  Player1Turn: number;
  Player2Turn: number;
  Player1Won: number;
  Player2Won: number;
  Draw: number;
}

export interface StateData {
  PlayerID: string;
  SessionID: string;
  Players: string[];
  State: State;
  Grid: number[];
  Timer: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService implements OnInit {
  loginUser = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  login(playerName: string) {
    this.loginUser = playerName;
    const response = this.http.post(
      'http://127.0.0.1:8080/login?name=' + playerName, ""
    ).subscribe((responseData: StateData) => {
      console.log(responseData);
    });
    return response;
  }
}
