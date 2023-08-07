let team = {
    _players: [],
    _games: [],

    set players(player) {
        if (typeof player === 'object') {
            this._players.push(player);
        }
    },

    set games(game) {
        if (typeof game === 'object') {
            this._games.push(game);
        }
    },

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayers(firstName, lastName, age) {
        return {
            firstName,
            lastName,
            age,
        }
    },

    addGames(opponents, teamPoints, opponentPoints) {
        return {
            opponents,
            teamPoints,
            opponentPoints,
        }
    }
}

// const player1 = {
//     firstName: "Riel", 
//     lastName: "Apos", 
//     age: 19,
// };

const players = [team.addPlayers("Riel", "Apos", 19), team.addPlayers("Aqua", "Hoshino", 16), team.addPlayers("Ruby", "Hoshino", 16)];
const teamGames = [team.addGames("Wild Cats", 5, 3), team.addGames("Serenity", 1, 5), team.addGames("Knight Raid", 5, 0)];

players.forEach(element => {
    team.players = element;
})

teamGames.forEach(element => {
    team.games = element;
})

console.log(team.players);
console.log(team.games);

