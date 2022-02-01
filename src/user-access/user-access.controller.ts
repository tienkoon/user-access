import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GetUserAccessFilterOutput } from './get-user-access.output';
import { GetUserAccessFilterInput } from './get-user-access.input';
import { CreateUserAccessInput } from './user-access.input';
import { UserAccessService } from './user-access.service';

@Controller('user-access')
export class UserAccessController {
  constructor(private userAccessService: UserAccessService) {}

  @Post()
  @HttpCode(200)
  async createUserAccess(@Body() createUserAccessInput: CreateUserAccessInput): Promise<void> {
    try{
      await this.userAccessService.createUserAccess(createUserAccessInput);
    } catch (e){
      throw new HttpException("Status Not Modified", HttpStatus.NOT_MODIFIED);
    }
  }

  @Get('/feature')
  getUserAccess(@Query() getUserAccessFilterInput: GetUserAccessFilterInput): Promise<GetUserAccessFilterOutput> {
    return this.userAccessService.getUserAccess(getUserAccessFilterInput);
  }
}
