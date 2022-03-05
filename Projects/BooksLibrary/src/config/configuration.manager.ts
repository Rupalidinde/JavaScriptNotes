import { AuthenticationType, AuthorizationType, Configurations } from './configuration.types';
import * as configuration from 'app.config.json';

export class ConfigurationManager {
    static _config: Configurations = null;

    public static loadConfigurations = (): void => {
        ConfigurationManager._config = {
            BaseUrl: process.env.BASE_URL,
            SystemIdentifier: '',
            MaxUploadFileSize: 0,
            Auth: {
                Authentication: configuration.Auth.Authentication as AuthenticationType,
                Authorization: configuration.Auth.Authorization as AuthorizationType,
            },
        };
    };

    public static Authentication = (): AuthenticationType => {
        return ConfigurationManager._config.Auth.Authentication;
    };

    public static Authorization = (): AuthorizationType => {
        return ConfigurationManager._config.Auth.Authorization;
    };

    public static MaxUploadFileSize = (): number => {
        return ConfigurationManager._config.MaxUploadFileSize;
    };
}
