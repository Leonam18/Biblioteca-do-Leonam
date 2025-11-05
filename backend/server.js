import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes";

dotenv.config(); // Pegar as variaves de ambente do arquivo .env

const app = express(); 
app.use(cors()); 
app.use(express.json());
app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Biblioteca do Leonam API');
}   );

const PORT = process.env.PORT || 5000;                  
app.listen(PORT, () => {
  console.log(`Servidor rodando em  ${PORT}`);
});