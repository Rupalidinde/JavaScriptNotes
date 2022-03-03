import { Configurations } from './configuration.types';

export class ConfigurationManager {
    static _config: Configurations = null;

    public static MaxUploadFileSize = (): number => {
        return ConfigurationManager._config.MaxUploadFileSize;
    };

    public static loadConfigurations = (): void => {
        ConfigurationManager._config = {
            BaseUrl           : process.env.BASE_URL,
            SystemIdentifier  : '',
            MaxUploadFileSize : 0,
        };
    };
}
