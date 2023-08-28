import { Injectable } from '@nestjs/common';
import { LoginDTO } from 'src/dto';

@Injectable()
export class AuthService {
  login(data: LoginDTO): LoginDTO {
    return data;
  }
}
