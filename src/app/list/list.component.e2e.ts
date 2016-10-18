// describe("List Component", () => {
//
//   beforeEach(() => {
//     // change hash depending on router LocationStrategy
//     browser.get("/list");
//   });
//
//   it("should have a list", () => {
//
//     browser.get("/login");
//
//     let loginBtn = element(by.id("btn-login"));
//
//     let emailEl = $("#userEmail");
//     let passwordEl = $("#userPw");
//
//     emailEl.sendKeys("testuser@fake.com");
//     passwordEl.sendKeys("test");
//
//     loginBtn.click();
//
//     browser.wait(() => {
//       return element(by.id("manageSecretBtn")).isPresent();
//     }, 6000);
//
//     expect(element(by.id("manageSecretBtn"))).toBeDefined();
//   });
//
//   /*it("should only have name initially visibile", () => {
//     let subject = element.all(by.css("#secretList li span")).first();
//
//     // when more than one element is found it will default to choosing the first one
//     return subject.isPresent();
//
//   });*/
//
//   // it should display other information when name is clicked
//   /*it("Clicking the secret name should display the rest of the data", () => {
//     let subject = element.all(by.id("manageSecretBtn")).first();
//
//     let siteNameLabel = element.all(by.css(".secretNameLabel")).first();
//     let typeLabel = element.all(by.css(".secretTypeLabel")).first();
//     let usernameLabel = element.all(by.css(".secretUsernameLabel")).first();
//     let passwordLabel = element.all(by.css(".secretPasswordLabel")).first();
//     let groupLabel = element.all(by.css(".secretGroupLabel")).first();
//
//     // we are going to test that the labels are showing
//     subject.click().then(() => {
//       siteNameLabel.isDisplayed();
//       typeLabel.isDisplayed();
//       usernameLabel.isDisplayed();
//       passwordLabel.isDisplayed();
//       groupLabel.isDisplayed();
//     });
//   });*/
//
// });
