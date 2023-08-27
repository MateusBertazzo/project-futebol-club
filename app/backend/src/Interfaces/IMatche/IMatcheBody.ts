export default interface IMatcheBody {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatcheBodyCreate {
  homeTeamGoals: number;
  awayTeamGoals: number;
  homeTeamId: number;
  awayTeamId: number;
}
