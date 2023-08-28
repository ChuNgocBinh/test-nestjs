import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from 'src/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() authDTO: LoginDTO) {
    return this.authService.login(authDTO);
  }
}
