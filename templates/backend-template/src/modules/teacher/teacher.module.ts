import { Module } from '@nestjs/common';
import { TeacherController } from 'src/modules/teacher/teacher.controller';
import { TeacherService } from 'src/modules/teacher/teacher.service';

@Module({
  // imports: [StudentModule],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
export class TeacherModule {}
