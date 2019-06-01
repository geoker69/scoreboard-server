class Game {
  constructor(home = 'Glen Waverley Rovers', away = 'Away Team') {
    this.homeTeamName = home;
    this.awayTeamName = away;

    this.homeGoals = 0;
    this.awayGoals = 0;

    this.homeBehinds = 0;
    this.awayBehinds = 0;
  }

  updateGoals(val, team) {
    if (team === 0) {
      this.homeGoals = this.homeGoals + val;
    }
    if (team === 1) {
      this.awayGoals = this.awayGoals + val;
    }
    return this.getScores();
  }

  updateBehinds(val, team) {
    if (team === 0) {
      this.homeBehinds = this.homeBehinds + val;
    }
    if (team === 1) {
      this.awayBehinds = this.awayBehinds + val;
    }
    return this.getScores();
  }

  updateTeamName(name, team) {
    if (team === 0) {
      this.homeTeamName = name;
    }
    if (team === 1) {
      this.awayTeamName = name;
    }
    return this.getScores();
  }

  getScores() {
    return {
      home: {
        teamName: this.homeTeamName,
        goals: this.homeGoals,
        behinds: this.homeBehinds,
        total: (this.homeGoals * 6) + this.homeBehinds
      },
      away: {
        teamName: this.awayTeamName,
        goals: this.awayGoals,
        behinds: this.awayBehinds,
        total: (this.awayGoals * 6) + this.awayBehinds
      }
    };
  }

  resetScores() {
    this.homeGoals = 0;
    this.homeBehinds = 0;
    this.awayGoals = 0;
    this.awayBehinds = 0;
    return this.getScores();
  }

}

module.exports = Game;