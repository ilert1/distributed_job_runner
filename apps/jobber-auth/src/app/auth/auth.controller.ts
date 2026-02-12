import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
} from '@jobber/shared';
import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './token-payload.interface';

@Controller('auth')
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  authenticate(request: AuthenticateRequest & { user: TokenPayload }) {
    return this.usersService.getUser({
      id: request.user.userId,
    });
  }
}
