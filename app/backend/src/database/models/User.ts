import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare role: string;
  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});
