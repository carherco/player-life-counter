import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[];

  constructor(private game: GameService, private router: Router) {
    this.players = this.game.getPlayers();
  }

  ngOnInit() {
  }

  finishGame() {
    this.router.navigate(['/home']);
  }

}
