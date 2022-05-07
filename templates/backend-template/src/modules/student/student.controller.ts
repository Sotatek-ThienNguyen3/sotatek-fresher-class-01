import { Controller, Get } from '@nestjs/common';
import { StudentService } from 'src/modules/student/student.service';

@Controller('/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  getNumberOfStudent() {
    // const studentService = new StudentService();
    // return studentService.getNumberOfStudent();

    return this.studentService.getNumberOfStudent();
  }
}
