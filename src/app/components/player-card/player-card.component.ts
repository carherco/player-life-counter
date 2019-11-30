import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  player: Player;

  constructor(private game: GameService, private router: Router) { }

  ngOnInit() {
  }

  modify() {
    this.game.selectPlayer(this.player);
    this.router.navigate(['/player']);
  }

}
