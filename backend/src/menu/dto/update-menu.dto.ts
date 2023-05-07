import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    foodname: string ;
    description: string ;
    price: number ;
    foodpic: string;
    soldout: boolean ;
    categoryId: number ;
}
