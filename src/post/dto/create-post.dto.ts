import { IsBoolean, IsDate, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString()
  @MinLength(5)
  title: string;

  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @IsString()
  @MinLength(10)
  description: string;

  @IsBoolean()
  status: boolean;
}
