import { QueryInterface, DataTypes } from "sequelize";
export default  {
    up: async (queryInterface: QueryInterface ) => {
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING,
            },
            role: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING, 
            },

        });
    },
    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable('users');
    }
}