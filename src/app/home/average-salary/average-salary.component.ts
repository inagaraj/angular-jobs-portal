import { Component, OnInit } from '@angular/core';
import {AvgsalaryService} from '../../services/avgsalary.service';
import {Avgsalary} from '../../models/avgsalary.model';
@Component({
  selector: 'app-average-salary',
  templateUrl: './average-salary.component.html',
  styleUrls: ['./average-salary.component.css']
})
export class AverageSalaryComponent implements OnInit {

  public avg_salary: Avgsalary[];

  constructor(private avgsalaryService: AvgsalaryService) {
   
  }
  public getAvgsalary() {
    this.avgsalaryService.getAvgsalary().subscribe(avg_salary => this.avg_salary = avg_salary);
  }
  ngOnInit() {
    this.getAvgsalary()
  }

}
