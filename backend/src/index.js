const express = require('express')
const app= express()
const connectDataBase=require('./config')
const cors = require('cors')
require('dotenv').config()

const PORT= process.env.PORT || 8080;
connectDataBase()

app.use(cors({
  origin: '*', 
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend running successfully 🚀');
});
const authRoutes = require('./auth.js');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});