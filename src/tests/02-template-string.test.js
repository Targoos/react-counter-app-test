import "@testing-library/jest-dom";
import { getSaludo } from "../base/02-template-string";

describe("Pruebas en el archivo 02-template-string.", () => {
  test("Debe retornar Hola Tulio", () => {
    const persona = "Tulio";

    const saludo = getSaludo(persona);

    expect(saludo).toBe(`Hola ${persona}`);
  });

  test("Debe retornar Hola Liliana", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Liliana");
  });
});
