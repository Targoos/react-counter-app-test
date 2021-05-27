import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../base/09-promesas";
import heroes from "../data/heroes";

describe("Pruebas en el archivo 09-promesas", () => {
  test("Debe retornar el heroe por el id async", (done) => {
    const id = 2;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[1]);

      done();
    });
  });

  test("Debe retornar un error si el heroe por el id no existe", (done) => {
    const id = 18;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");

      done();
    });
  });
});
