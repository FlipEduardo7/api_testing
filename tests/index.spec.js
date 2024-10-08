import app from "../src/app";
import request from "supertest";
describe("GET /tasks", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /task", () => {
  describe("given a title and description", () => {
    const newTask = {
      title:  "title",
      description: "description",
    }
    //should respond with a 200 status code
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.statusCode).toBe(200);
    });

    //should respond with a content-type of application/json
    test("should have a content-type: application/json in header", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    //should respond with a json object containing a new task with an id
    test("should respond with an task ID", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  describe('when a title and description is missing', () => {
    test('should respond with a 400 status code', async () => {
      const fields = [
        {},
        {title: 'title'},
        {description: 'description' },
      ];
      
      for (const body of fields){
        const response = await request(app).post('/tasks').send(body);
        expect(response.statusCode).toBe(400)
      }
    })
  });
});
