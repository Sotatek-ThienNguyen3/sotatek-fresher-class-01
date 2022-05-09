import { Module } from '@nestjs/common';
import { StudentModule } from 'src/modules/student/student.module';
import { TeacherModule } from 'src/modules/teacher/teacher.module';

@Module({
  imports: [StudentModule, TeacherModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

// SELECT * FROM users;
// userRepo.find();
