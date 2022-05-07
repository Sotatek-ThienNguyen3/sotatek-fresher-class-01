import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getNumberOfStudent() {
    return {
      data: 10,
    };
  }
}
