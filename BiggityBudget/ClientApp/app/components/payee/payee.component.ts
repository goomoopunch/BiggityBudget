import { Component, Output, EventEmitter } from '@angular/core';
import { Payee, CategoryType } from '../../common';

@Component({
    selector: 'payee',
    template: require('./payee.component.html')
})
export class PayeeComponent {
    public payees: Payee[];
    public something: CategoryType;
    
    public addPayee() {
        alert("Add Payee!");
    }

    private validatePayee() {

    }
}

