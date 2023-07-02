import { PartialType } from '@nestjs/mapped-types';
import { CreateCartpayDto } from './create-cartpay.dto';

export class UpdateCartpayDto extends PartialType(CreateCartpayDto) {}
