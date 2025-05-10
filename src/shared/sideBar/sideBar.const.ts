const INGREDIENTS_OPTIONS = {
  cheese: 'Cheese',
  mozzarella: 'Mozzarella',
  parmesan: 'Parmesan',
  gorgonzola: 'Gorgonzola',
  feta: 'Feta',
  pepperoni: 'Pepperoni',
  salami: 'Salami',
  ham: 'Ham',
  bacon: 'Bacon',
  chicken: 'Chicken',
  beef: 'Beef',
  sausage: 'Sausage',
  mushroom: 'Mushroom',
  champignon: 'Champignon',
  onion: 'Onion',
  red_onion: 'Red Onion',
  tomato: 'Tomato',
  cherry_tomato: 'Cherry Tomato',
  bell_pepper: 'Bell Pepper',
  jalapeno: 'Jalapeño',
  olives: 'Olives',
  black_olives: 'Black Olives',
  green_olives: 'Green Olives',
  pickles: 'Pickles',
  pineapple: 'Pineapple',
  corn: 'Corn',
  arugula: 'Arugula',
  basil: 'Basil',
  spinach: 'Spinach',
  garlic: 'Garlic',
  pesto: 'Pesto',
  bbq_sauce: 'BBQ Sauce',
  white_sauce: 'White Sauce',
  tomato_sauce: 'Tomato Sauce',
  chili_flakes: 'Chili Flakes',
  oregano: 'Oregano',
  truffle_oil: 'Truffle Oil',
  hot_honey: 'Hot Honey',
}

const FILTRATION_OPTIONS = {
  collect: 'Can collect',
  new: 'New',
} as const

const DOUGH_OPTIONS = {
  thin: 'Thin',
  traditional: 'Traditional',
}

export const SIDEBAR_FILTERS = {
  FILTRATION: {
    label: 'Filtration',
    type: 'checkbox',
    options: FILTRATION_OPTIONS,
  },
  INGREDIENTS: {
    label: 'Ingredients',
    type: 'checkbox',
    options: INGREDIENTS_OPTIONS,
  },
  DOUGH: {
    label: 'Type of dough',
    type: 'radio',
    options: DOUGH_OPTIONS,
  },
} as const satisfies Record<string, SidebarFilterOptions>

export type SidebarFilterOptions = {
  label: string
  type: 'checkbox' | 'radio'
  options: Record<string, string>
}
