import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccess } from './user-access.entity';
import { Repository } from 'typeorm';
import { CreateUserAccessInput } from './user-access.input';
import { GetUserAccessFilterInput } from './get-user-access.input';
import { isEmpty } from 'class-validator';
import { GetUserAccessFilterOutput } from './get-user-access.output';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class UserAccessService {
  constructor(
    @InjectRepository(UserAccess) private userAccessRepository: Repository<UserAccess>,
  ){}

  /**
   * This method is to update user access if featureName and email exists, otherwise create a new one
   * @param createUserAccessInput 
   * @returns UserAccess
   */
  async createUserAccess(createUserAccessInput: CreateUserAccessInput): Promise<UserAccess> {
    const { featureName, email, enable } = createUserAccessInput;
    let userAccess: UserAccess = await this.userAccessRepository.findOne({featureName, email});
    if(isEmpty( userAccess )){
      userAccess = this.userAccessRepository.create({
        featureName,
        email,
        enable
      });
    } else {
      if(userAccess.enable == enable){
        throw new ExceptionsHandler;
      }
      userAccess.enable = enable;
    }
    return this.userAccessRepository.save(userAccess);
  }

  /**
   * This method is to access the userAccess and return canAccess: true if the user can access the specified featureName 
   * otherwise canAccess: false
   * @param getUserAccessFilterInput 
   * @returns GetUserAccessFilterOutput
   */
  async getUserAccess(getUserAccessFilterInput: GetUserAccessFilterInput): Promise<GetUserAccessFilterOutput> {
    const { email, featureName } = getUserAccessFilterInput;
    let getUserAccessFilterOutput: GetUserAccessFilterOutput = new GetUserAccessFilterOutput();
    let userAccess: UserAccess = await this.userAccessRepository.findOne({featureName, email});
    if(!isEmpty( userAccess )){
      getUserAccessFilterOutput.canAccess=true;
    }else{
      getUserAccessFilterOutput.canAccess=false;
    }
    return getUserAccessFilterOutput;
  }
}
