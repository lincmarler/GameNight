import { AppState } from "../AppState.js";

class PlayersService {
    manageScore(playerName, updatedScore) {
        let player = AppState.players.find(p => p.name == playerName)
        console.log('service', playerName, player)
        player.score = updatedScore
        console.log(player)
    }
}


export const playersService = new PlayersService()