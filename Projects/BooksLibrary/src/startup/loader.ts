import { Authorizer } from '../auth/authorizer';
import { container, DependencyContainer } from 'tsyringe';
import { Logger } from '../common/logger';

export class Loader {
    private static _container: DependencyContainer = container;

    public static get container() {
        return Loader._container;
    }

    private static _authorizer: Authorizer = null;

    public static get authorizer() {
        return Loader._authorizer;
    }

    public static init = async (): Promise<boolean> => {
        try {
            //Register injections here...

            return true;
        } catch (error) {
            Logger.instance().log(error.message);
            return false;
        }
    };
}
