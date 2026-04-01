const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this port if needed

app.use(cors());
app.use(express.json());

// Example route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

// Example Sudoku game data (replace with real logic or database as needed)
const sampleGames = {
  1: {
    level: 1,
    board: [
      [5, 3, null, null, 7, null, null, null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8, null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4, 1, 9, null, null, 5],
      [null, null, null, null, 8, null, null, 7, 9]
    ]
  }
  // Add more levels as needed
};

// New route for fetching a Sudoku game by level
app.get('/api/sudoku/game/:level', (req, res) => {
  const level = req.params.level;
  const game = sampleGames[level];
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found for this level.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});