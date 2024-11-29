const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5005;


app.use(cors());
app.use(express.json());
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

let products = [
  {
    id: 1,
    name: 'Volkswagen Passat B8',
    color: ['dark', 'bright', 'normal'],
    year: ['1992', '1995', '2000'],
    price: 1500,
    available: true,
    image: './images/passatb2.jpg',
    hp: 784,
  },
  {
    id: 2,
    name: 'Polo AMG',
    color: ['bright', 'dark', 'classic'],
    year: ['2000', '2003', '2005'],
    price: 800,
    available: false,
    image: './images/polo.jpg',
    hp: 456,
  },
  {
    id: 3,
    name: 'Audi Alien',
    color: ['normal', 'bright', 'dark'],
    year: ['2055', '2060', '2070'],
    price: 15000,
    available: true,
    image: './images/alien.jpg',
    hp: 912,
  },
  {
    id: 4,
    name: 'Big Foot на город',
    color: ['dark', 'classic', 'normal'],
    year: ['2005', '2010', '2015'],
    price: 10000,
    available: false,
    image: './images/bigfoot.jpg',
    hp: 623,
  },
  {
    id: 5,
    name: 'Легенькі підфарбування',
    color: ['dark', 'bright', 'normal'],
    year: ['2014', '2016', '2018'],
    price: 6000,
    available: true,
    image: './images/junk.jpg',
    hp: 334,
  },
  {
    id: 6,
    name: 'Газ + бензин',
    color: ['bright', 'normal', 'dark'],
    year: ['2023', '2024', '2025'],
    price: 100,
    available: true,
    image: './images/tesla.jpg',
    hp: 875,
  },
  {
    id: 7,
    name: 'Toyota Supra MK4',
    color: ['classic', 'dark', 'bright'],
    year: ['1998', '2000', '2002'],
    price: 13999,
    available: true,
    image: './images/supra.jpg',
    hp: 988,
  },
  {
    id: 8,
    name: 'Honda Civic Type R',
    color: ['bright', 'normal', 'dark'],
    year: ['2019', '2020', '2022'],
    price: 1200,
    available: true,
    image: './images/civic.jpg',
    hp: 567,
  },
  {
    id: 9,
    name: 'BMW M3 E30',
    color: ['classic', 'dark', 'bright'],
    year: ['1990', '1992', '1995'],
    price: 15001,
    available: false,
    image: './images/e30.jpeg',
    hp: 920,
  },
  {
    id: 10,
    name: 'Mercedes G-Wagon',
    color: ['dark', 'classic', 'normal'],
    year: ['2001', '2005', '2010'],
    price: 13333,
    available: true,
    image: './images/gclass.jpg',
    hp: 820,
  },
  {
    id: 11,
    name: 'Chevrolet Camaro',
    color: ['bright', 'normal', 'dark'],
    year: ['2010', '2012', '2015'],
    price: 1100,
    available: true,
    image: './images/camaro.jpg',
    hp: 410,
  },
  {
    id: 12,
    name: 'Ford Mustang GT',
    color: ['bright', 'classic', 'normal'],
    year: ['2015', '2018', '2020'],
    price: 9770,
    available: true,
    image: './images/gt5.jfif',
    hp: 899,
  },
  {
    id: 13,
    name: 'Nissan Skyline GT-R',
    color: ['dark', 'classic', 'bright'],
    year: ['1999', '2000', '2002'],
    price: 16579,
    available: false,
    image: './images/r34.jpg',
    hp: 965,
  },
  {
    id: 14,
    name: 'Porsche 911',
    color: ['classic', 'normal', 'dark', 'pink'],
    year: ['1995', '1998', '2000', '2033'],
    price: 17596,
    available: true,
    image: './images/930.jpg',
    hp: 756,
  },
  {
    id: 15,
    name: 'Mazda RX-7',
    color: ['normal', 'bright', 'dark'],
    year: ['2002', '2005', '2008'],
    price: 12345,
    available: true,
    image: './images/rx7.jpeg',
    hp: 650,
  },
  {
    id: 16,
    name: 'Subaru WRX',
    color: ['normal', 'classic', 'bright'],
    year: ['2010', '2012', '2015'],
    price: 9500,
    available: true,
    image: './images/wrx.jpg',
    hp: 879,
  },
  {
    id: 17,
    name: 'Dodge Charger',
    color: ['dark', 'bright', 'normal'],
    year: ['2008', '2010', '2012'],
    price: 8000,
    available: true,
    image: './images/charger.jpg',
    hp: 795,
  },
  {
    id: 18,
    name: 'Jaguar X-Type',
    color: ['classic', 'dark', 'bright'],
    year: ['2005', '2008', '2010'],
    price: 7000,
    available: true,
    image: './images/xtype.jfif',
    hp: 715,
  },
  {
    id: 19,
    name: 'Mazda Miata MX-5',
    color: ['bright', 'dark', 'normal'],
    year: ['2000', '2003', '2006'],
    price: 5000,
    available: true,
    image: './images/miata.jfif',
    hp: 689,
  },
  {
    id: 20,
    name: 'Hyundai Genesis',
    color: ['normal', 'classic', 'bright'],
    year: ['2012', '2015', '2018'],
    price: 14345,
    available: false,
    image: './images/hyundai.jfif',
    hp: 940,
  },
  {
    id: 21,
    name: 'Дізільний бус',
    color: ['bright', 'dark', 'normal'],
    year: ['2011', '2013', '2015'],
    price: 2000,
    available: true,
    image: './images/disiel.jpg',
    hp: 100,
  },
];


app.get('/api/products/', (req, res) => {
  const {search, sort, hp, price} = req.query;

  let filteredProducts = products;

  if (search) {
    const withoutSpace = search.trim().toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(withoutSpace)
    );
  }

  if (sort === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (hp) {
    const maxHp = parseInt(price, 10);
    filteredProducts = filteredProducts.filter(product =>
      product.hp <= maxHp
    );

  }

  if (price) {
    const maxPrice = parseInt(price, 10);
    filteredProducts = filteredProducts.filter(product =>
      product.price <= maxPrice
    );
  }

  res.json(filteredProducts);
});


app.get('/api/products/:id', (req, res) => {
  const {id} = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({message: 'Product not found'});
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
