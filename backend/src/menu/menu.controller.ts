import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, Request, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from 'src/orderauth/auth.guard';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foodpic', {
    storage: diskStorage({
      destination: './uploads',
      filename(req, file, callback) {
          const filename = `${Date.now()}-${file.originalname}`
          callback(null, filename)
      },
    })
  }))
  create(@Body() createMenuDto: CreateMenuDto, @UploadedFile() file: Express.Multer.File) {
    createMenuDto.foodpic = file.filename
    return this.menuService.create(createMenuDto);
  }

  @Get('imgname/:imgname')
  findimg(@Param('imgname') imgname, @Res() res) {
    return res.sendFile(imgname, { root: './uploads' });
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req) {
    console.log(req.headers)
    return this.menuService.findAll();
  }

  @Get('soup')
  findSoup() {
    return this.menuService.findSoup();
  }

  @Get('salad')
  findSalad() {
    return this.menuService.findSalad();
  }

  @Get('food')
  findFood() {
    return this.menuService.findFood();
  }
  
  @Get('drink')
  findDrink() {
    return this.menuService.findDrink();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
