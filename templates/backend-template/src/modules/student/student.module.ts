import { Module } from '@nestjs/common';
import { StudentController } from 'src/modules/student/student.controller';
import { StudentService } from 'src/modules/student/student.service';

@Module({
  // imports: [TeacherModule],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
