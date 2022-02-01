import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from './User.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './User.providers';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[DatabaseModule,forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [...userProviders, UserService],  
  exports: [UserService]
})
export class UserModule {}
