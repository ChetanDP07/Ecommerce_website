
type ServerEnvironment = 'production' | 'local';


interface Config {
    baseUrl: string;
}

const checkConfig = (server: ServerEnvironment): Config => {
    let config: Config;
    switch (server) {
        case 'production':
            config = {
                baseUrl: "https://admin-crestmart.vercel.app",
            };
            break;
        case 'local':
            config = {
                baseUrl: "http://localhost:3000",
            };
            break;
        default:
            throw new Error(`Unknown server environment: ${server}`);
    }

    return config;
};

export const selectServer: ServerEnvironment = 'production';

export const config = checkConfig(selectServer);


