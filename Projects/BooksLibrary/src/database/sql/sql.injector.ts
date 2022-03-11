import { DependencyContainer } from 'tsyringe';
import { DatabaseConnector_Sequelize } from './sequelize/database.connector.sequelize';

export class SQLInjector {
    static registerInjections(container: DependencyContainer) {
        container.register('IDatabaseConnector', DatabaseConnector_Sequelize);
    }
}
