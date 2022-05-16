import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreateStudentDto } from 'src/modules/student/dto/create-student.dto';
import { PaginationDto } from 'src/modules/student/dto/pagination';
import { StudentService } from 'src/modules/student/student.service';

@Controller('/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // controller: nhan, xu ly request (auth, check role, validate body, => call den service (business logic))
  @Get('/')
  async getAllStudent(@Query() paging: PaginationDto) {
    const students = await this.studentService.getAllStudent(paging);
    return {
      data: students,
      query: JSON.stringify(paging),
    };
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Use to get student by id',
  })
  @ApiParam({
    name: 'id',
    example: 1,
  })
  getStudentById(@Param('id') id: number) {
    return {
      data: 'get student by id : ' + id,
    };
  }

  @Post('/')
  createStudent(@Body() dto: CreateStudentDto) {
    // dto = data transfer object
    return {
      data: 'create new student ' + JSON.stringify(dto),
    };
  }

  // Params : path
  // Body :
  // Query: localhost:3000/studet?key=thien
  // @Patch('/:id') // update partially object
  @Put('/:id') // update entirely object
  updateStudent(
    @Param('id') id: number,
    @Body('name') name: string,
    @Query('key') value: string,
  ) {
    return {
      data: 'update  student ' + id + ' - name : ' + name,
    };
  }

  @Delete('/:id')
  deleteStudent(@Body('id') id: number) {
    return {
      data: 'delete  student ' + id,
    };
  }
}
