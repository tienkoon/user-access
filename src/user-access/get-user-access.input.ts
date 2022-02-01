import { Field, InputType } from "@nestjs/graphql";
import { IsEmail } from 'class-validator'
@InputType()
export class GetUserAccessFilterInput{
  @Field()
  featureName: string;

  @IsEmail()
  @Field()
  email: string;
}