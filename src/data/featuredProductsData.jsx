import jabonArrozImg from '../assets/products/arroz.jpg';
import jabonCafeImg from '../assets/products/cafe.png';
import jabonLecheImg from '../assets/products/leche.jpg';
import jabonSandiaImg from '../assets/products/sandia.png';

export const featuredProductsData = [
  {
    id: 'prod_01',
    name: 'Komitsu - Arroz, Miel y Romero',
    image: jabonArrozImg,
    price: 8.50,    
    url: '/products/jabon-komitsu',
    category: 'Jabón Facial',
    short_description: 'Una mezcla calmante con aceite esencial de romero para una limpieza suave y relajante.',
  },
  
  {
    id: 'prod_02',
    name: 'Brulé - Café Naranja y Cacao',
    image: jabonCafeImg,
    price: 12.00,
    url: '/products/jabon-Brule',
    category: 'Jabón Corporal',
    short_description: 'Purifica y limpia los poros profundamente con las propiedades del café y la naranja.',
  },

  {
    id: 'prod_03',
    name: 'Mitsuno - Leche, Miel y Avena',
    image: jabonLecheImg,
    price: 12.00,
    url: '/products/jabon-mitsuno',
    category: 'Jabón Corporal',
    short_description: 'Revitaliza tu piel eliminando células muertas con avena, miel y leche, ingredientes nutritivos.',
  },

  {
    id: 'prod_04',
    name: 'Suika - Miel y Rosa Mosqueta',
    image: jabonSandiaImg,
    price: 10.50,
    url: '/products/jabon-suika',
    category: 'Jabón Exfoliante',
    short_description: 'Un potente sérum regenerador que hidrata y reduce la apariencia de líneas finas.',
  },
];