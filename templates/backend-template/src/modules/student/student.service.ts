import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/modules/student/dto/pagination';

@Injectable()
export class StudentService {
  async getAllStudent(paging: PaginationDto) {
    console.log('pagination');
    console.log(paging.page);
    console.log(paging.size);
    // page = 3
    // size = 10
    // => 1-10 11-20 21-30
    // skip: 30 = (page - 1)*size
    // take: 10 = size
    // LIMIT ? OFFSET ? , [size, (page-1)*size]

    return [
      {
        name: 'thien',
        address: 'cic',
        company: 'Sotatek-dev',
      },
    ];
  }
}
