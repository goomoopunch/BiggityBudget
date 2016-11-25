import { Component, Output, EventEmitter } from '@angular/core';
import { Payee, CategoryType } from '../../common';
import { KeysPipe } from '../../pipes/keys.pipe';

//import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({    
    selector: 'add-payee',    
    template: require('./add-payee.component.html')
    
})
export class AddPayeeComponent {    
    @Output() ok: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    
    payee: Payee;
    categoryTypes = CategoryType;
    
    okClick() {    
        this.ok.emit();
    }

    cancelClick() {
        this.cancel.emit();
    }
}