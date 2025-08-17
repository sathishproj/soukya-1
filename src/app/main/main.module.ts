import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { EldercareComponent } from './eldercare/eldercare.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MedicalTourismComponent } from './medical-tourism/medical-tourism/medical-tourism.component';
import { AestheticDentistryIndiaComponent } from './medical-tourism/aesthetic-dentistry-india/aesthetic-dentistry-india.component';
import { AlliedHealthcareIndiaComponent } from './medical-tourism/allied-healthcare-india/allied-healthcare-india.component';
import { BariatricSurgeryIndiaComponent } from './medical-tourism/bariatric-surgery-india/bariatric-surgery-india.component';
import { CardiacSurgeryIndiaComponent } from './medical-tourism/cardiac-surgery-india/cardiac-surgery-india.component';
import { CosmeticAndPlasticSurgeryIndiaComponent } from './medical-tourism/cosmetic-and-plastic-surgery-india/cosmetic-and-plastic-surgery-india.component';
import { DemoGeriatricComponent } from './demo-geriatric/demo-geriatric.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    EldercareComponent,
    BlogComponent,
    PageNotFoundComponent,
    MedicalTourismComponent,
    AestheticDentistryIndiaComponent,
    AlliedHealthcareIndiaComponent,
    BariatricSurgeryIndiaComponent,
    CardiacSurgeryIndiaComponent,
    CosmeticAndPlasticSurgeryIndiaComponent,
    DemoGeriatricComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,FormsModule
  ]
})
export class MainModule { }
