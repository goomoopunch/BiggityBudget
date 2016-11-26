import { Component, Output, EventEmitter } from '@angular/core';
import { Payee, CategoryType } from '../../common';
import { KeysPipe } from '../../pipes/keys.pipe';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({    
    selector: 'add-payee',    
    template: require('./add-payee.component.html'),
    styles: [require('./add-payee.component.min.css')]
})
export class AddPayeeComponent {    
    @Output() ok: EventEmitter<any> = new EventEmitter();
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    
    categoryTypes = CategoryType;

    addPayeeForm = this.fb.group({
        name: ["", Validators.required]
    });

    constructor(public fb: FormBuilder) { }

    submitForm(event) {
        console.log(event);
        console.log(this.addPayeeForm.value);
        this.ok.emit();
    }
    
    cancelClick() {
        this.cancel.emit();
    }
}