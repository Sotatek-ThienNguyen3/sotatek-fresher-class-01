import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
  getNumberOfTeacher() {
    return {
      data: 1,
    };
  }
}
