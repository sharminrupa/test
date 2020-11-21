import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudentList(): any {
    // tslint:disable-next-line:one-variable-per-declaration
    const studentList = [
      {id: '01', name: 'Sharmin', mobile: '01679628774'},
      {id: '02', name: 'Riyed', mobile: '01679628778'},
      {id: '03', name: 'Habib', mobile: '01679628779'},
      {id: '04', name: 'piya', mobile: '01679628780'}
    ];
    return studentList;
  }

}
