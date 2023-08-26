import { QueryInterface, DataTypes } from "sequelize";
export default  {
    up: async (queryInterface: QueryInterface ) => {
        await queryInterface.createTable('matches', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            homeTeamId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'home_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            awayTeamId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'away_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            homeTeamGoals: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'home_team_goals',
            },
            awayTeamGoals: {
                allowNull: false,
                type: DataTypes.INTEGER,
                field: 'away_team_goals',
            },
            inProgress: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
                field: 'in_progress',
            }
        });
    },
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable('matches');
    }
}