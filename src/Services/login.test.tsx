import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const email = "nicolas@gmail.com";
  const password = "123456";

  it("Alert com boas vindas", async () => {
    const response = await login(email, password);
    expect(response).toBeTruthy()
  });

  it("Deve exibir um Alert com boas vindas", async () => {
    const response = await login('email@invalido.com', '12345');
    expect(response).toBeFalsy()
  })
});
