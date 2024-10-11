import { config as dotEnvConfig } from 'dotenv';
import path from 'path';

dotEnvConfig({ path: path.join(process.cwd(), '.env') });

const config = {
    port: process.env.PORT || 5000,
    db_uri: process.env.DB_URI,
    node_env: process.env.NODE_ENV as 'development' | 'production',
};

export default config;
