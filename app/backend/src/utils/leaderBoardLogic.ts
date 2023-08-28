import Matche from '../database/models/Matche';
import Team from '../database/models/Team';

export default class leaderLogic {
  static countVictories(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';
    const goals = teamSide === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    const victories = totalMatches.filter((match) =>
      match[goals] > match[side === 'homeTeamId' ? 'awayTeamGoals' : 'homeTeamGoals']);

    return victories.length;
  }

  static countDraws(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';
    const goals = teamSide === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    const draws = totalMatches.filter((match) =>
      match[goals] === match[side === 'homeTeamId' ? 'awayTeamGoals' : 'homeTeamGoals']);

    return draws.length;
  }

  static countDefeats(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';
    const goals = teamSide === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    const defeat = totalMatches.filter((match) =>
      match[goals] < match[side === 'homeTeamId' ? 'awayTeamGoals' : 'homeTeamGoals']);

    return defeat.length;
  }

  static totalGames(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    return totalMatches.length;
  }

  static totalPoints(matches: Matche[], teamId: number, teamSide: string) {
    const victories = this.countVictories(matches, teamId, teamSide);
    const draws = this.countDraws(matches, teamId, teamSide);

    return (victories * 3) + draws;
  }

  static totalGoalsFavor(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';
    const goals = teamSide === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    const goalsFavor = totalMatches.reduce((acc, match) => acc + match[goals], 0);

    return goalsFavor;
  }

  static totalGoalsConceded(matches: Matche[], teamId: number, teamSide: string) {
    const side = teamSide === 'home' ? 'homeTeamId' : 'awayTeamId';
    const goals = teamSide === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';

    const totalMatches = matches.filter((match) => match[side] === teamId);

    const goalsConceded = totalMatches.reduce((acc, match) => acc + match[goals], 0);

    return goalsConceded;
  }

  static statistcsTeams(teams: Team[], matche: Matche[], teamSide: string) {
    const teamsStatistics = teams.map((team) => ({
      name: team.dataValues.teamName,
      totalPoints: this.totalPoints(matche, team.id, teamSide),
      totalGames: this.totalGames(matche, team.id, teamSide),
      totalVictories: this.countVictories(matche, team.id, teamSide),
      totalDraws: this.countDraws(matche, team.id, teamSide),
      totalLosses: this.countDefeats(matche, team.id, teamSide),
      goalsFavor: this.totalGoalsFavor(matche, team.id, teamSide),
      goalsOwn: this.totalGoalsConceded(matche, team.id, teamSide),
    }));

    return teamsStatistics;
  }
}
