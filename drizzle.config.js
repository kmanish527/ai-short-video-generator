/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./configs/schema.js",  // Ensure this path is correct
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_yEBl5QK8wkrN@ep-solitary-block-a5cz0c1m-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};
