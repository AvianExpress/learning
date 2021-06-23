import { Controller, Post, Body, Param, Get, Delete, Patch, HttpCode} from '@nestjs/common';
import { MainPageModel } from './main-page.model'; 

@Controller('main-page')
export class UsersController {
    @Post('create')
    async create(@Body() dto:Omit<MainPageModel,'_id'>){

    }

    @Get('_id')
    async get(@Param('id') id:string) {

    }

    @Delete('_id')
    async delete(@Param('_id')id:string) {

    }

    @Patch('_id')
    async patch(@Param('_id')id: string, @Body()dto:MainPageModel){

    }
}
