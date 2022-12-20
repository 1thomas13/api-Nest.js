import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/createUser.dto'
import { User } from './users.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }

  getUsers() {
    return this.userRepository.find()
  }

  getUser(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    })
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id })
  }
}
