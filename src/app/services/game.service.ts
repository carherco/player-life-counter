import { Injectable } from '@angular/core';
import { Player } from 'src/app/model/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private players: any[] = [];
  private selectedPlayer: Player;

  constructor() {
    this.players.push(new Player('Jugador 1'));
    this.players.push(new Player('Jugador 2'));
    this.players.push(new Player('Jugador 3'));
    this.players.push(new Player('Jugador 4'));
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  removePlayer(position: number) {
    this.players.splice(position, 1);
  }

  getPlayers() {
    return this.players;
  }

  selectPlayer(player: Player) {
    this.selectedPlayer = player;
  }

  getSelectedPlayer() {
    return this.selectedPlayer;
  }
}
