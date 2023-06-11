import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ){}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
