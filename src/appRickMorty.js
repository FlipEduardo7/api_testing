import express from "express";

const app = express();
app.use(express.json());

app.get('/api/character/:id', (req, res) => {
  if (req.params.id === '1') {
    res.json({ id: 1, name: 'Rick Sanchez', status: 'Alive' });
  } else {
    res.status(404).send('Character not found');
  }
});

export default app;