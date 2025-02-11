import { DataSource } from "typeorm";

//  type orm connection with database;
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1234",
  database: "typeorm_db",
  port: 3000,
  entities: ["src/company/*{.ts,.js}"],
  synchronize: true,
  //   logging: true,
});

export function dbConnect() {
  //  call the connection instance;
  AppDataSource.initialize()
    .then(() => {
      console.log("DB Successfully Connected");
    })
    .catch((err) => {
      console.log("DB Connection Failed", err);
    });
}
