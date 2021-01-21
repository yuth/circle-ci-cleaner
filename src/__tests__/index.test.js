const MINUTES = 1000 * 60;
jest.setTimeout(10 * MINUTES); // 10 Minutes
describe("Long running test", () => {
  test("should pass", async () => {
    await (() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(undefined), 0.1 * MINUTES);
        expect(false).toBeTruthy();
      });
    })();
  });
});
