

import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from "./app2.component";
import{ProductListComponent} from "./product/product-list.component"
import {FormsModule} from  "@angular/forms";
import {ProductService} from "./product/products.service";
import {HttpClientModule} from '@angular/common/http';
import {StarComponent} from './feature/star.components';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
    imports: [BrowserModule, 
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
{ path: 'products', component: ProductListComponent},
//{ path: 'products/:id', component: ProductDetailComponent},
{ path: 'welcome', component: WelcomeComponent},
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }

],{ useHash: true })],
    declarations: [AppComponent, ProductListComponent,StarComponent,WelcomeComponent ],
    bootstrap: [AppComponent],
    providers: [ProductService]
    
})
export class AppModule{

}
