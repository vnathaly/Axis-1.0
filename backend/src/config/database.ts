import "reflect-metadata";
import { DataSource } from "typeorm";
import * as entities from "../entities";

const AppDataSource = new DataSource ({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5435,
    username: process.env.DB_USERNAME || "axis_admin",
    password: process.env.DB_PASSWORD || "axis_password",
    database: process.env.DB_DATABASE || "axisdb",
    synchronize: true,
    logging: false,
    entities: Object.values(entities),
});

export default AppDataSource;
