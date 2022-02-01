import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccessController } from './user-access.controller';
import { UserAccess } from './user-access.entity';
import { UserAccessResolver } from './user-access.resolver';
import { UserAccessService } from './user-access.service';

@Module({
  imports: [ TypeOrmModule.forFeature([UserAccess])],
  controllers: [UserAccessController],
  providers: [UserAccessService, UserAccessResolver],
})
export class UserAccessModule {}
