let team = {
    _players: [{
        firstName: 'Riel',
        lastName: 'Apos',
        age: 19,
    },
    {
        firstName: 'Ruby',
        lastName: 'Hoshino',
        age: 16,

    },
    {
        firstName: 'Aqua',
        lastName: 'Hoshino',
        age: 16,
    },
],
    _games: [
        {
            opponent: 'Wild Cats',
            teamPoints: 5,
            opponentPoints: 3,
        },
        {
            opponent: 'Serenity',
            teamPoints: 0,
            opponentPoints: 5,
        },
        {
            opponent: 'Knight Raid',
            teamPoints: 5,
            opponentPoints: 0,
        },
    ],
    
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        newPlayer = {
            firstName,
            lastName,
            age,
        },

        team._players.push(newPlayer);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        }

        team._games.push(game);
    }
}

console.log(team.players);
console.log(team.games);

console.log('\nNEW PLAYER ADDED');
team.addPlayer("Jedro", "Morales", 19);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);


// Try using setters to add array of objects in the players and game
// Get the total number of games your team has played
// Get the average score of all of their games
