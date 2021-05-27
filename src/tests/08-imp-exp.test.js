import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../base/08-imp-exp";
import heroes from "../data/heroes";

describe("Pruebas en el archivo 08-imp-exp", () => {
  test("Debe retornar el heroe por el id", () => {
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined", () => {
    const id = 18;

    const heroe = getHeroeById(id);

    expect(heroe).toEqual(undefined);
  });

  test("Debe retornar los heroes por el owner", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesArr = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesArr);
  });

  test("Debe retornar un arreglo de 2 elementos", () => {
    const owner = "Marvel";

    const arr = getHeroesByOwner(owner);

    expect(arr.length).toBe(2);
  });
});
