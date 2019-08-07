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

  constructor(private http: HttpClient) { }

  onLogin(playerName: string) {
    return this.http.post(
      'http://127.0.0.1:8080/login?name=' + playerName, ""
    ).subscribe((responseData: any) => {
      console.log(responseData);
    });
  }
}
