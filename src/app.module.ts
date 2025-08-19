import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { productModule } from './product/product.module';

@Module({
  imports: [userModule, productModule],
})
export class AppModule {}
