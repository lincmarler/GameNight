import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
    constructor() {
        console.log('player controller loaded')
        this.drawPlayers()
    }
    drawPlayers() {
        let content = ''
        AppState.players.forEach(player => {
            content += player.cardTemplate
        })
        document.getElementById('players').innerHTML = content
    }

    manageScore(playerName) {
        let updatedScore = parseInt(window.prompt('new score value?'))
        console.log('managing score', playerName, updatedScore)
        playersService.manageScore(playerName, updatedScore)
        this.drawPlayers()
    }
}