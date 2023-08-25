import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
    up: async (queryInterface: QueryInterface ) => {
        await queryInterface.createTable('teams', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            teamName: {
                allowNull: false,
                type: DataTypes.STRING,
                field: 'team_name',
            }
        });
    },
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable('teams');
    }
}