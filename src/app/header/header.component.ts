import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../login/player-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private playerData: PlayerDataService) { }

  ngOnInit() {
  }

}
