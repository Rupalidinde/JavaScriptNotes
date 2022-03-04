import { Logger } from '../common/logger';

export class Loader {
    public static init = async (): Promise<boolean> => {
        try {
            //Register injections here...
            Injector.registerInjections(container);

            return true;
        } catch (error) {
            Logger.instance().log(error.message);
            return false;
        }
    };
}
