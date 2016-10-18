// /*
// * @angular
// */
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { By } from "@angular/platform-browser";
// import { DebugElement } from "@angular/core";
//
// /*
// * Passit
// */
// import { ListComponent } from "./list.component";
// import NgPassitSDK from "../ngsdk/sdk";
// import Api from "../ngsdk/api";
// import { SecretService } from "./secret/secret.service";
//
// /*
// * test setup
// */
// let comp: ListComponent;
// let fixture: ComponentFixture<ListComponent>;
// let de: DebugElement;
// let el: HTMLElement;
// let frm: DebugElement;
// let formEl: HTMLElement;
//
// describe("Testing List Component: ", () => {
//
//   beforeEach( () => {
//
//     TestBed.configureTestingModule({
//       declarations: [ ListComponent ]
//     });
//
//     fixture = TestBed.createComponent(ListComponent);
//     comp = fixture.componentInstance;
//
//     // check for button
//     de = fixture.debugElement.query(By.css("#addSecretBtn"));
//     el = de.nativeElement;
//
//     frm = fixture.debugElement.query(By.css("#secretList"));
//     formEl = frm.nativeElement;
//     // check for add thingie button
//     // check for list
//
//     it("should have button for add form displaying", () => {
//       expect(el).toBeDefined();
//     });
//
//     it("should have list displaying", () => {
//       expect(formEl).toBeDefined();
//     });
//   });
//
// });
