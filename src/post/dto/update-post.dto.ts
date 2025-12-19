import { IsOptional, IsString, MinLength, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @MinLength(5)
  title?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsString()
  @MinLength(10)
  description?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
