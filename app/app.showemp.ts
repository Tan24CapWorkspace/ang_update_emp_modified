import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'show-emp',
    templateUrl: 'app.showemp.html' 
})

export class ShowEmp{
    emp_list:any[]=[
        {empId:100,empName:"tanmay ",empSalary:30000.00},
        {empId:101,empName:"ram",empSalary:20000.00},
        {empId:102,empName:"Krish",empSalary:15000.00}
    ];

    @Output()
    notifyAddEmp: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output()
    notifyDelEmp: EventEmitter<any[]> = new EventEmitter<any[]>();


    sendDataToAddEmp():any{
        this.notifyAddEmp.emit(this.emp_list);
    }

    sendDataToDelEmp():any{
        
    }
}