import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from 'node_modules/@angular/common/http';


export enum StateType {
  Wait = 0,
  Player1Turn,
  Player2Turn,
  Player1Won,
  Player2Won,
  Draw
}

export enum GridSymbol {
  Empty = 0,
  Cross = 1,
  Circle = 2
}

export interface StateData {
  PlayerID: string;
  SessionID: string;
  Players: Array<string>;
  State: StateType;
  GridSymbol: Array<GridSymbol>;
  Timer: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  player = '';
  responseData: StateData;
  playerName: string;

  constructor(private http: HttpClient) { }

  login(playerName: string, onComplete: () => void) {
    this.player = playerName;
    this.http.get(
      'http://127.0.0.1:8080/login?name=' + playerName
    ).subscribe((response: StateData) => {
      this.responseData = response;
      this.playerName = playerName;
      console.log(this.responseData);
      onComplete();
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
    });
  }

  action(x : number, y: number) {
    const playerID = this.responseData.PlayerID;
    let searchParams = new HttpParams();
    searchParams = searchParams.append('PlayerID', `${playerID}`);
    searchParams = searchParams.append('x', `${x}`);
    searchParams = searchParams.append('y', `${y}`);
    return this.http.get(
      'http://127.0.0.1:8080/action',
      { params: searchParams, responseType: "text" }   
    ).subscribe((response: string) => {
      console.log(response);
    })
  }
}
