export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Margherita',
    title: 'Classic Pizza',
    desc: 'Tomato, mozzarella, basil',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/960px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    price: 9.99,
  },
  {
    id: '2',
    name: 'Pepperoni',
    title: 'Spicy & Tasty',
    desc: 'Tomato, mozzarella, pepperoni',
    src: 'https://cdn-media.choiceqr.com/prod-eat-mamamia-main/menu/sGrxYnQ-VvDOWPs-UHEXCKd.webp',
    price: 11.49,
  },
  {
    id: '3',
    name: 'Veggie',
    title: 'Fresh & Green',
    desc: 'Bell pepper, onion, olives, mushrooms',
    src: 'https://cdn-media.choiceqr.com/prod-eat-mamamia-main/menu/rgAWBOA-DlCIeMd-jOCCvuU.webp',
    price: 10.49,
  },
  {
    id: '4',
    name: 'Veggie',
    title: 'Fresh & Green',
    desc: 'Bell pepper, onion, olives, mushrooms',
    src: 'https://cdn-media.choiceqr.com/prod-eat-mamamia-main/menu/rgAWBOA-DlCIeMd-jOCCvuU.webp',
    price: 10.49,
  },
  {
    id: '5',
    name: 'Veggie',
    title: 'Fresh & Green',
    desc: 'Bell pepper, onion, olives, mushrooms',
    src: 'https://cdn-media.choiceqr.com/prod-eat-mamamia-main/menu/rgAWBOA-DlCIeMd-jOCCvuU.webp',
    price: 10.49,
  },
]

export interface Product {
  id: string
  name: string
  title: string
  desc: string
  src: string
  price: number
}
