import { IsNotEmpty } from 'class-validator';
export class CreateUserAccessDto {
  @IsNotEmpty()
  featureName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  enable: boolean;
}
