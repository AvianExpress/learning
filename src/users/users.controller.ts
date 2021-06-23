import { Controller, Post, Body, Param, Get, Delete, Patch} from '@nestjs/common';
import { UsersModel } from './users.model';

@Controller('users')
export class UsersController {
    @Post('create')
    async create(@Body() dto:Omit<UsersModel,'_id'>){

    }

    @Get('_id')
    async get(@Param('id') id:string) {

    }

    @Delete('_id')
    async delete(@Param('_id')id:string) {

    }

    @Patch('_id')
    async patch(@Param('_id')id: string, @Body()dto:UsersModel){

    }
}
