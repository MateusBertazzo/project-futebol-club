import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class Team extends Model {
  declare readonly id: number;
  declare teamName: string;
}
Team.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  modelName: 'Team',
  tableName: 'teams',
  sequelize: db,
  timestamps: false,
});
