import { Component } from '@angular/core'

@Component({
    selector: 'warning-alert',
    template: `
    <p>
        Failed
    </p>`,
    styles: [`p {
        border-bottom: 3px solid red;
        border-left: 10px solid red;
        background-color: lightgrey;
        width:200px;
        color: red;
        padding: 10px;
        border-radius: 0 5px 5px 0;
     }`]
})
export class WarningAlertComponent {

}