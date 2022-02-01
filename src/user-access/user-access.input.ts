import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmail } from 'class-validator'
@InputType()
export class CreateUserAccessInput{
  @Field()
  featureName: string;

  @IsEmail()
  @Field()
  email: string;

  @IsBoolean()
  @Field()
  enable: boolean;
}