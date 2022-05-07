import { Controller, Get } from '@nestjs/common';
import { TeacherService } from 'src/modules/teacher/teacher.service';

@Controller('/teacher')
export class TeacherController {
  constructor(private readonly studentService: TeacherService) {}

  @Get('/')
  getNumberOfTeacher() {
    // const studentService = new StudentService();
    // return studentService.getNumberOfStudent();

    return this.studentService.getNumberOfTeacher();
  }
}
