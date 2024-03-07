import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { SingleImageUploadComponent } from '../components/single-image-upload/single-image-upload.component';
import { IconModule } from '@coreui/icons-angular';
import { GridModule, UtilitiesModule, SharedModule } from '@coreui/angular';

@NgModule({
    imports: [
        CommonModule,
        IconModule,
        GridModule,
        UtilitiesModule,
        SharedModule,
    ],
    exports: [
        ImageUploadComponent,
      SingleImageUploadComponent
    ],
    declarations: [
        ImageUploadComponent,
        SingleImageUploadComponent
    ],
})
export class CustomSharedModule { }
