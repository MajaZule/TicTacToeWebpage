import { Injectable } from '@angular/core';
import { HttpClient } from 'node_modules/@angular/common/http';


export interface State {
  Wait: number;
  Player1Turn: number;
  Player2Turn: number;
  Player1Won: number;
  Player2Won: number;
  Draw: number;
}

export interface GridSymbol {
  Empty: number;
  Cross: number;
  Circle: number;
}

export interface StateData {
  PlayerID: string;
  SessionID: string;
  Players: Array<string>;
  State: State;
  GridSymbol: Array<GridSymbol>;
  Timer: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  player = '';
  responseData: StateData;
  newState: StateData;

  constructor(private http: HttpClient) { }

  login(playerName: string) {
    this.player = playerName;
    return this.http.post(
      'http://127.0.0.1:8080/login?name=' + playerName, ""
    ).subscribe((responseData) => {
      console.log();
    });
  }

  // playing() {
  //   return this.http.post(
  //     'http://127.0.0.1:8080/state' + this.responseData, ""
  //   ).subscribe((newState) => {
  //     console.log(newState);
  //   });
  // }
}
