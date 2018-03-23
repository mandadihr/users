import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';


describe('CommonService', () => {
  const user = { _id: 1, firstName: 'test1', lastName: 'e2e', age: 24 };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array<users>>',
    inject([CommonService], (commonService) => {
      commonService.saveUser().subscribe((res) => {
        expect(res.length).toBeDefined();
      });
    }));

  it('should return an Observable<Array<users>>',
    inject([CommonService], (commonService) => {
      commonService.GetUser().subscribe((res) => {
        expect(res.length).toBeDefined();
      });
    }));


  it('should return an Observable<Array<users>>',
    inject([CommonService], (commonService) => {
      commonService.deleteUser(user._id).subscribe((res) => {
        expect(res.length).toBeDefined();
      });
    }));


});
