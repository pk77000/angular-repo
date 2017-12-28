

import {Component} from "@angular/core"
@Component ({

selector: 'pm-app',
template: `
<ul class='nav navbar-nav'>
<li><a [routerLink]="['/welcome']">Home </a> </li>
<li><a [routerLink]="['/products']">Product List </a> </li>
</ul>
<router-outlet></router-outlet>
`,
moduleId:module.id
}
)
export class AppComponent{

    name:String = "Prashant"


}