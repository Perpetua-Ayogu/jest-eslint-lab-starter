
const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require("../index");


describe("capitalizeWords", () => {
  it("capitalizes the first letter of each word", () => {
    const input = "hello world";

    const result = capitalizeWords(input);

    expect(result).toBe("Hello World");
  });

  it("returns an empty string when given an empty string", () => {
    const result = capitalizeWords("");

    expect(result).toBe("");
  });

  it("capitalizes words separated by special characters", () => {
    const result = capitalizeWords("hello-world");

    expect(result).toBe("Hello-World");
  });

  it("capitalizes a single word", () => {
    const result = capitalizeWords("javascript");

    expect(result).toBe("Javascript");
  });
});


describe("filterActiveUsers", () => {
  it("returns only active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { name: "Alice", isActive: true },
    ]);
  });

  it("returns an empty array when there are no users", () => {
    const result = filterActiveUsers([]);

    expect(result).toEqual([]);
  });

  it("returns an empty array when all users are inactive", () => {
    const users = [
      { name: "Alice", isActive: false },
      { name: "Bob", isActive: false },
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

  it("returns all users when they are all active", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: true },
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual(users);
  });
});


describe("logAction", () => {
  it("includes the username and action in the log message", () => {
    const result = logAction("login", "Alice");

    expect(result).toContain("User Alice");
    expect(result).toContain("performed login");
  });

  it("includes a valid timestamp", () => {
    const result = logAction("logout", "Bob");

    const prefix = "User Bob performed logout at ";
    const timestamp = result.replace(prefix, "");

    expect(new Date(timestamp).toString()).not.toBe("Invalid Date");
  });
});
