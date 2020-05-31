import PowerfulMap from "../src";

const shape = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  complex: "string here",
  oh: ["no", "some", "complex", "objects"],
  more: {
    deep: {
      objects: ["with", { arr: "ay" } as any],
    },
  },
};

type Shape = typeof shape & { id: number };

test("Find from deep values", () => {
  const s = new PowerfulMap<Shape, string>();
  for (let i = 0; i < 10; i++) {
    s.set({ ...shape, id: i }, `${i}`);
  }
  expect(
    s.get({
      ...shape,
      id: 5,
      more: {
        deep: {
          objects: ["with", { arr: "ay" }],
        },
      },
    })
  ).toEqual("5");
});

test("Fail on deep objects", () => {
  const s = new PowerfulMap<Shape, string>();
  for (let i = 0; i < 10; i++) {
    s.set({ ...shape, id: i }, `${i}`);
  }

  expect(
    s.get({
      ...shape,
      id: 5,
      more: {
        deep: {
          objects: ["", {}],
        },
      },
    })
  ).not.toBeUndefined;
});
