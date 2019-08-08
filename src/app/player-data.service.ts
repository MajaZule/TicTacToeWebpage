import { Injectable } from '@angular/core';
import { HttpClient } from 'node_modules/@angular/common/http';

// interface StateData {
//   PlayerID: string;
//   SessionID: string;
//   Players: string[];
//   State;
//   Grid;
//   Timer: number;
// }

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  loginUserOne = '';
  loginUserTwo = '';

  constructor(private http: HttpClient) { }

  loginFirstPlayer(playerNameOne: string) {
    this.loginUserOne = playerNameOne;
    return this.http.post(
      'http://127.0.0.1:8080/login?name=' + playerNameOne, ""
    ).subscribe((responseData: any) => {
      console.log(responseData);
    });
  }

  loginSecondPlayer(playerNameTwo: string) {
    this.loginUserTwo = playerNameTwo;
    return this.http.post(
      'http://127.0.0.1:8080/login?name=' + playerNameTwo, ""
    ).subscribe((responseData: any) => {
      console.log(responseData);
    });
  }
}
