import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetUserAccessFilterInput } from './get-user-access.input';
import { CreateUserAccessInput } from './user-access.input';
import { UserAccessService } from './user-access.service';
import { UserAccessType } from './user-access.type';

@Resolver(of => UserAccessType)
export class UserAccessResolver {
  constructor(
    private userAccessService: UserAccessService
  ){}

  @Query(returns => UserAccessType)
  userAccess(
    @Args('getUserAccessInput') getUserAccessInput: GetUserAccessFilterInput,
  ) {
    return this.userAccessService.getUserAccess(getUserAccessInput);
  }
  
  @Mutation(returns => UserAccessType)
    createUserAccess(
      @Args('createUserAccessInput') createUserAccessInput: CreateUserAccessInput,
      ) {
      return this.userAccessService.createUserAccess(createUserAccessInput);
    }
}

