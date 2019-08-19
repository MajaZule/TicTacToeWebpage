import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from 'node_modules/@angular/common/http';


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

  constructor(private http: HttpClient) { }

  login(playerName: string) {
    //const response = this.responseData;
    this.player = playerName;
    return this.http.get(
      'http://127.0.0.1:8080/login?name=' + playerName
    ).subscribe((response: StateData) => {
      this.responseData = response;
      console.log(this.responseData);
    });
  }

  state() {
    const playerID = this.responseData.PlayerID;
    const sessionID = this.responseData.SessionID;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('PlayerID', `${playerID}`);
    searchParams = searchParams.append('SessionID', `${sessionID}`);
    return this.http.get(
      'http://127.0.0.1:8080/state', 
      { params: searchParams }
    ).subscribe((response: StateData) => {
      this.responseData = response;
      console.log(response);
    });
  }

  action() {
    const playerID = this.responseData.PlayerID;
    let x: number;
    let y: number;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('PlayerID', `${playerID}`);
    searchParams = searchParams.append('x', `${x}`);
    searchParams = searchParams.append('y', `${y}`);
    return this.http.get(
      'http://127.0.0.1:8080/action',
      { params: searchParams }
    ).subscribe((response: StateData) => {
      this.responseData = response;
      console.log(response);
    })
  }
}
