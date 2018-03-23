import { CommonService } from './common.service';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs/observable/of';
describe('AppComponent', () => {
  const user = { _id: 1, firstName: 'test1', lastName: 'e2e', age: 24 };
  beforeEach(async(() => {
    const commonServiceMock = {
      saveUser: () => of('test'),
      deleteUser: () => of('deleted user'),
      GetUser: () => of([user])
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [{ provide: CommonService, useValue: commonServiceMock }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as valButton 'Save!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.valbutton).toEqual('Save');
  }));

  it('test oninit get users data', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.Repdata.length).toEqual(1);
  }));

  it('test onSave to get save user data', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.onSave(user, true);
  }));

  it('test Onedit to get edit user data', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.edit(user);
    expect(app.user.id).toEqual(1);
    expect(app.user.firstName).toEqual('test1');
    expect(app.user.lastName).toEqual('e2e');
    expect(app.user.age).toEqual(24);
    expect(app.valbutton).toEqual('Update');
  }));

  it('test delete to get  user deleted', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.delete(user._id);
  }));

});
