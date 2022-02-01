import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('UserAccess')
export class UserAccessType {
  @Field(type => ID)
  id: string;

  @Field()
  featureName: string;

  @Field()
  email: string;

  @Field()
  enable: boolean;
}
