import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PgAddPhonePage } from './pg-add-phone.page';

describe('PgAddPhonePage', () => {
  let component: PgAddPhonePage;
  let fixture: ComponentFixture<PgAddPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgAddPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PgAddPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
