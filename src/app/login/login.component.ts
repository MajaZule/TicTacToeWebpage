import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('invisibleVisible', [
      state('void', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('void => visible', [
        animate('2s ease-in')
      ])
    ]),
    trigger('flyIn', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('0.3s 2.5s')
      ])
    ]),
    trigger('invisibleVisibleInput', [
      state('void', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('void => visible', [
        animate('2s 4s ease-in')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  playerName = '';
  isVisible = true;

  constructor(private playerData: PlayerDataService, private router: Router) { }

  ngOnInit() {
  }

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

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
