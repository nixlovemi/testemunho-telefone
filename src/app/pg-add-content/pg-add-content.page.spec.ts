import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PgAddContentPage } from './pg-add-content.page';

describe('PgAddContentPage', () => {
  let component: PgAddContentPage;
  let fixture: ComponentFixture<PgAddContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgAddContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PgAddContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
