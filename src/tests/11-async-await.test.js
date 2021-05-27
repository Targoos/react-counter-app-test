import "@testing-library/jest-dom";
import { getImagen } from "../base/11-async-await";

describe("Pruebas en el archivo 11-async-await", () => {
  test("Debe retornar la url", async (done) => {
    const image = await getImagen();

    expect(image.includes("https://")).toBe(true);

    done();
  });

  test("Debe retornar el error", async () => {
    const image = await getImagen();
  });

  //   test("Debe retornar un error si el heroe por el id no existe", () => {});
});
