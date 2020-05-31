import PowerfulMap from "../src";

const shape = { a: 1, b: 2, c: 3, d: 4, e: 5, complex: "string here" };
type Shape = typeof shape & { id: number };

test("Find from id variation", () => {
  const s = new PowerfulMap<Shape, string>();
  for (let i = 0; i < 10; i++) {
    s.set({ ...shape, id: i }, `${i}`);
  }
  expect(s.get({ ...shape, id: 5 })).toEqual("5");
});

test("Find undefined", () => {
  const s = new PowerfulMap<Shape, string>();
  for (let i = 0; i < 10; i++) {
    s.set({ ...shape, id: i }, `${i}`);
  }
  expect(s.get({ ...shape, id: 11 })).toEqual(undefined);
});

test("Find one", () => {
  const s = new PowerfulMap();
  s.set({ object: 3 }, "ok");
  expect(s.get({ object: "3" })).toEqual("ok");
});
