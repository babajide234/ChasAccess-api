import MTN from './assets/Mtn.png'
import Airtel from './assets/airtel.png'
import GLO from './assets/glo.png';
import Mobile from './assets/9mobile.png'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Market place', path: '/market-place' },
    { name: 'Bills Payments', path: '/bills-payments' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
];

// src/categories.js
const categories = [
    { name: 'All category', path: '/categories/all' },
    { name: 'Books', path: '/categories/books' },
    { name: 'Events', path: '/categories/events' },
    { name: 'Design', path: '/categories/design' },
    { name: 'Personal development', path: '/categories/personal-development' },
    { name: 'Business', path: '/categories/business' },
    { name: 'Arts', path: '/categories/arts' },
    { name: 'Bills Payment', path: '/categories/bills-payment' },
  ];
  
  const providers = [
    { src: MTN, label: 'MTN', value: 'mtn' },
    { src: GLO, label: 'Glo', value: 'glo' },
    { src: Mobile, label: '9Mobile', value: '9mobile' },
    { src: Airtel, label: 'Airtel', value: 'airtel' },
  ];
  
export { navItems, categories, providers };
