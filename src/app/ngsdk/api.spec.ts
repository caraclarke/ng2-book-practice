import {XHRBackend, HttpModule, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import Api from "./api";
import { inject, fakeAsync, TestBed } from "@angular/core/testing";

describe("Testing sdk api: ", () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [
      {
        provide: XHRBackend,
        useClass: MockBackend
      },
      Api,
    ]
  }));

  it("should be able to make GET requests", inject([XHRBackend, Api], fakeAsync((mockBackend, api) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({body: ["something"]}
        )));
      }
    );

    api.jsonGet("test-url").then(resp => {
      expect(resp[0]).toBe("something");
    });
  })));
});
