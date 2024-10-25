import express from 'express';
import { getAllCars, addCar, editCar, deleteCar, searchCars, sortCars, getTotalHorsePower } from '../controllers/carController.js';

const router = express.Router();

router.get('/', getAllCars);
router.post('/', addCar);
router.put('/:id', editCar);
router.delete('/:id', deleteCar);
router.get('/search', searchCars);
router.get('/sort', sortCars);
router.get('/total-horsepower', getTotalHorsePower);

export default router;
