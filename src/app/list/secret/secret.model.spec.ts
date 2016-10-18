/*
* Passit
*/
import { Secret } from "./secret";

describe("Testing Secret Model: ", () => {

  it("should have correct front-end properties:", () => {
    let newSecret = new Secret();

    newSecret.id = 1;
    newSecret.name = "Test Secret";
    newSecret.type = "website";
    newSecret.visible_data = {
      "username": "username"
    };
    newSecret.secrets = {
      "password": "fakepassword"
    };
    newSecret.group_id = 1;

    expect(newSecret.id).toBe(1);
    expect(newSecret.name).toBe("Test Secret");
    expect(newSecret.type).toBe("website");
    expect(newSecret.visible_data.username).toBe("username");
    expect(newSecret.secrets.password).toBe("fakepassword");
    expect(newSecret.group_id).toBe(1);
  });

});
