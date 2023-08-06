let team = {
    _players: [],
    _games: [],

    set players(player) {
        if (typeof player == 'object') {
            this._players.push(player);
        }
    },

    get players() {
        return this._players;
    },

    addPlayers(firstName, lastName, age) {
        return {
            firstName,
            lastName,
            age,
        }
    }
}

// const player1 = {
//     firstName: "Riel", 
//     lastName: "Jasper", 
//     age: 19,
// };

const player1 = team.addPlayers("Riel", "Apos", 19);

team.players = player1;

console.log(team.players);

