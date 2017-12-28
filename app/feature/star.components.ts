import {Component,OnChanges,Input} from "@angular/core"

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css'],
    moduleId:module.id
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;

constructor(){
    //this.selectedProduct = _productService.getProducts();
    //this.products = _productService.getProducts();
  }
  ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}    