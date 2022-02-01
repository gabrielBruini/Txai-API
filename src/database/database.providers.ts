import { Products } from 'src/products/products.entity';
import { User } from 'src/Users/User.entity';
import { createConnection } from 'typeorm';



export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'apitxai',
      entities:  [User, Products],
      synchronize: true,
    }),
  },
];