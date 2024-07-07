import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { PayslipComponent } from './payslip/payslip.component';



@NgModule({
  declarations: [
    SalaryComponent,
    PayslipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayrollModule { }
