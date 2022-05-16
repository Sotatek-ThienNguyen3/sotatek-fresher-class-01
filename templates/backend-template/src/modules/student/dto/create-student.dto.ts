import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    name: 'name',
    example: 'thien',
  })
  name: string;

  @ApiProperty({
    name: 'age',
    example: 22,
    required: false,
  })
  age: number;

  @ApiProperty({
    name: 'company',
    example: 'Sotatek',
  })
  company: string;

  @ApiProperty({
    name: 'address',
    example: 'Trung Kinh',
  })
  address: string;
}
