import pkg from 'pg';
import { configDotenv } from 'dotenv';

configDotenv.config();

const { Pool } = pkg;

// impondo pool

const pool = new Pool({
    USER: process.env.USER,
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    PASSWORD: process.env.PASSWORD,
    PORT: process.env.PORT
});

export default pool;