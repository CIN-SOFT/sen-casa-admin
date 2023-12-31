import { Component, OnInit } from '@angular/core';
import { Property } from '../../../interfaces/property.interface';
@Component({
    selector: 'app-property-details',
    templateUrl: 'property-details.component.html',
    styleUrls: ['./property-details.component.scss']
})

export class PropertyDetailsComponent implements OnInit {
    property: Property | undefined;
    activeIndex: number = 0;
    constructor() {}

    ngOnInit() {
        if(!this.property) return;
        this.property.images = [
            '../../../../assets/images/hero/hero-slider-1.jpg',
            '../../../../assets/images/hero/hero-slider-2.jpg',
            '../../../../assets/images/hero/hero-slider-3.jpg',
            '../../../../assets/images/hero/hero-slider-4.jpg',
            '../../../../assets/images/hero/hero-slider-5.jpg',
            '../../../../assets/images/hero/hero-slider-6.jpg',
        ];
    }

    onItemChange($event: any): void {
        console.log('Carousel onItemChange', $event);
    }

    setAciveImage(i: number){
        this.activeIndex = i;
    }
}