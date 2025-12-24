import { Dish } from './types';

export const MENU_ITEMS: Dish[] = [
  // Antipasti
  {
    id: 'ant-1',
    name: 'Cornetti Salati',
    description: 'Farciti con salmone norvegese e formaggio Philadelphia.',
    category: 'Antipasti',
    image: 'https://i.imgur.com/c75mSbG.png$0',
    ingredients: ['Sfoglia al burro', 'Salmone affumicato Norvegese', 'Philadelphia', 'Semi di papavero', 'Aneto fresco'],
    pairing: 'Prosecco Valdobbiadene DOCG',
    curiosity: 'La sfoglia viene spennellata con uovo battuto e latte per garantire una doratura perfetta e croccante.'
  },
  {
    id: 'ant-2',
    name: 'Tentacolo di Polpo',
    description: 'Arrostito su vellutata delicata di ceci e rosmarino.',
    category: 'Antipasti',
    image: 'https://i.imgur.com/NNIHvUM.png$0',
    ingredients: ['Polpo verace', 'Ceci biologici', 'Rosmarino', 'Olio EVO', 'Paprika dolce'],
    pairing: 'Greco di Tufo',
    curiosity: 'Il polpo viene massaggiato con sale grosso prima della cottura per arricciarne i tentacoli e intenerire le carni.'
  },
  {
    id: 'ant-3',
    name: 'Tartare di Salmone',
    description: 'Con erba cipollina fresca e croccanti scaglie di mandorle.',
    category: 'Antipasti',
    image: 'https://i.imgur.com/iK9VMEH.png$0',
    ingredients: ['Filetto di salmone abbattuto', 'Erba cipollina', 'Mandorle tostate', 'Lime', 'Olio EVO'],
    pairing: 'Franciacorta Satèn',
    curiosity: 'Il taglio al coltello preserva la consistenza della carne, evitando che si scaldi come avverrebbe col mixer.'
  },
  {
    id: 'ant-4',
    name: 'Tris di Crudi',
    description: 'Degustazione di carpacci: salmone, pesce spada e tonno rosso.',
    category: 'Antipasti',
    image: 'https://i.imgur.com/JJl1fT0.jpeg$0',
    ingredients: ['Salmone', 'Pesce Spada', 'Tonno Rosso', 'Pepe rosa', 'Sale Maldon'],
    pairing: 'Alta Langa Brut',
    curiosity: 'Servito rigorosamente senza limone spremuto sopra per non "cuocere" le carni delicate del pesce crudo.'
  },
  {
    id: 'ant-5',
    name: 'Salame di Polpo',
    description: 'Affettato sottile con olio EVO e limone.',
    category: 'Antipasti',
    image: 'https://i.imgur.com/ynVq8ZR.png$0',
    ingredients: ['Polpo', 'Prezzemolo', 'Limone di Sorrento', 'Olio extravergine'],
    pairing: 'Falanghina del Sannio',
    curiosity: 'Il polpo viene pressato in bottiglia per almeno 24 ore per ottenere la compattezza tipica di un insaccato.'
  },
  // Primo
  {
    id: 'pri-1',
    name: 'Paccheri all\'Astice',
    description: 'In salsa di doppio pomodoro (datterino giallo e rosso).',
    category: 'Primo',
    image: 'https://i.imgur.com/oJYEKhF.png$0',
    ingredients: ['Paccheri di Gragnano', 'Astice fresco', 'Datterino Giallo', 'Datterino Rosso', 'Prezzemolo', 'Aglio'],
    pairing: 'Fiano di Avellino',
    curiosity: 'Il doppio pomodoro crea un equilibrio perfetto tra la dolcezza del giallo e la leggera acidità del rosso.'
  },
  // Secondi
  {
    id: 'sec-1',
    name: 'Baccalà all\'Insalata',
    description: 'Tradizionale, con olive nere e rinforzo.',
    category: 'Secondi',
    image: 'https://i.imgur.com/W8ok9nc.png$0',
    ingredients: ['Baccalà dissalato', 'Olive nere di Gaeta', 'Cavolfiore', 'Papaccelle', 'Sottaceti'],
    pairing: 'Ischia Bianco',
    curiosity: 'Un piatto immancabile della tradizione napoletana, simbolo di buon auspicio per la Vigilia.'
  },
  {
    id: 'sec-2',
    name: 'Polpette di Pescatrice',
    description: 'Morbide polpette di mare in umido.',
    category: 'Secondi',
    image: 'https://i.imgur.com/eQITOBP.png$0',
    ingredients: ['Polpa di Rana Pescatrice', 'Mollica di pane', 'Prezzemolo', 'Aglio', 'Pomodoro San Marzano'],
    pairing: 'Rosato del Salento',
    curiosity: 'La rana pescatrice offre una carne soda e priva di spine, perfetta per polpette che piacciono a tutti.'
  },
  {
    id: 'sec-3',
    name: 'Broccoli Saltati',
    description: 'Contorno classico natalizio con aglio e peperoncino.',
    category: 'Secondi',
    image: 'https://i.imgur.com/yRrQGOK.png$0',
    ingredients: ['Broccoli baresi', 'Aglio', 'Olio EVO', 'Peperoncino piccante', 'Limone'],
    pairing: 'Aglianico (leggero)',
    curiosity: 'Vengono sbollentati e poi passati in padella a fuoco vivo ("stufati") per mantenerli croccanti.'
  }
];

export const CATEGORIES: { id: string; label: string }[] = [
  { id: 'Antipasti', label: 'Antipasti' },
  { id: 'Primo', label: 'Il Primo' },
  { id: 'Secondi', label: 'Secondi & Contorni' }
];