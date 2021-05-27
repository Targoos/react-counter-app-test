import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../base/05-funciones";

describe("Pruebas en el archivo 05-funciones", () => {
  test("Debe retonar un objeto", () => {
    const userTest = { uid: "ABC123", username: "El_Papi1502" };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("Debe retonar un objecto con el usuario", () => {
    const user = getUsuarioActivo("Tulio");

    expect(user).toEqual({
      uid: "ABC567",
      username: "Tulio",
    });
  });
});
