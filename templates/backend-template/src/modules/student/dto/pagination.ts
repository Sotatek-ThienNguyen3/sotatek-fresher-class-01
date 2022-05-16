import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional({
    name: 'page',
    example: 1,
  })
  page: string;

  @ApiPropertyOptional({
    name: 'size',
    example: 20,
  })
  size: number;
}
