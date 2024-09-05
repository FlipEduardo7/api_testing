import request from "supertest";

describe('POST /TfHKIF/data', () => {
  test('should create a new user', async () => {
    const newUser = {
      Name: 'John',
      LastName: 'Doe',
    };

    const response = await request('https://retoolapi.dev')
      .post('/uHjSTh/data')
      .send(newUser);

    expect(response.statusCode).toBe(201); // Verifica que la creación fue exitosa
    expect(response.body).toHaveProperty('id'); // Verifica que se generó un ID
    expect(response.body).toMatchObject(newUser); // Verifica que los datos coincidan
  });

  test('should delete a user by ID', async () => {
    const userId = 11; // Asume que existe un usuario con ID 11
    
    const response = await request('https://retoolapi.dev')
      .delete(`/uHjSTh/data/${userId}`);

    expect(response.statusCode).toBe(200); // Verifica que la eliminación fue exitosa
    expect(response.body).toEqual({}); // La respuesta debe estar vacía
  });

  test('should edit a user', async () => {
      const userId = 12;
      const updatedUser = {
        Name: 'Lalo',
        LastName: 'Teria'
      }
      const response = await request('https://retoolapi.dev')
      .put(`/uHjSTh/data/${userId}`)
      .send(updatedUser)

      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject(updatedUser);
    });
});