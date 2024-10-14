import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import seedSuperAdmin from './app/DB/seedSuperAdmin';

const server = http.createServer(app);

async function bootstrap() {
    try {
        await mongoose.connect(config.db_uri as string);
        await seedSuperAdmin();
        server.listen(config.port, () => {
            console.log(`Listening on PORT ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

bootstrap();
