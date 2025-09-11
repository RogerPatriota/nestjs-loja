import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { productModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConfigService } from './config/db.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    userModule, 
    productModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
      inject: [DBConfigService]
    })
  ],
})
export class AppModule {}
