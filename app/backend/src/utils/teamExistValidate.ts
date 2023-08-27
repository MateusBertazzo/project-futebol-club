function validateTeamExist(teamId: number, allTeams: Array<{ id: number }>) {
  if (!allTeams.find((team) => team.id === teamId)) {
    return false;
  }
  return true;
}

export default validateTeamExist;
