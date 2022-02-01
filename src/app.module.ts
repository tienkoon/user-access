import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserAccess } from './user-access/user-access.entity';
import { UserAccessModule } from './user-access/user-access.module';

@Module({
  imports: [
    UserAccessModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/user_access',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        UserAccess
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
