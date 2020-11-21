import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  StudentList: any[];
  constructor(private stService: StudentService) { }

  ngOnInit(): void {
  }

  getStudentList(): void{
   // this.StudentList = this.stService.getStudentList();
   return this.stService.getStudentList();
  }

}
