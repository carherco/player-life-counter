import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  players: Player[] = [];
  newPlayer: Player = new Player();

  constructor(private game: GameService, private router: Router) { }

  ngOnInit() {
  }

  addPlayer() {
    this.game.addPlayer(this.newPlayer);
    this.newPlayer = new Player();
    this.players = this.game.getPlayers();
    console.log(JSON.stringify(this.players));
  }

  deletePlayer(pos) {
    this.game.removePlayer(pos);
    this.players = this.game.getPlayers();
  }

  startGame() {
    this.router.navigate(['/game']);
  }

}
