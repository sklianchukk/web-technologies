import express from 'express';
import cors from 'cors';
import carRoutes from './routes/carRoutes.js';
import { getAllCars, searchCars, sortCars } from './controllers/carController.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/cars', carRoutes);

app.get('/cars', getAllCars);
app.get('/cars/search', searchCars);
app.get('/cars/sort', sortCars);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
