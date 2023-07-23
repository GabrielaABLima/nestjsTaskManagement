import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private userEntityRepository: UsersRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
    return this.userEntityRepository.createUser(authCredentialsDto);
  }
}
