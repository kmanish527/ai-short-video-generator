import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon('postgresql://neondb_owner:npg_yEBl5QK8wkrN@ep-solitary-block-a5cz0c1m-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require');
export const db = drizzle({ client: sql });

