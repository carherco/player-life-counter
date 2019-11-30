import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(private game: GameService, private router: Router) {
    this.player = this.game.getSelectedPlayer();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/game']);
  }

}
