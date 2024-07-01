import { DataSource } from "typeorm";
import { User } from "../entity/user.entity.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "facugg",
  password: "root123",
  database: "express_crud",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
