export type Badge = 'popular' | 'spicy'

export type MenuItem = {
  id: string
  name: string
  description: string
  ingredients?: string
  price: string
  image: string
  badges?: Badge[]
}

export type Category = {
  id: string
  title: string
  items: MenuItem[]
}

export const brand = {
  name: 'پینار فست‌فود',
  slogan: 'طعم بی‌نظیر، تجربه ماندگار',
  logo: '/images/pinar-logo.png',
  storefront: '/images/storefront.jpg',
  instagram: 'https://instagram.com/pinar.fastfood',
  phone: '۰۹۱۲ ۱۲۳ ۴۵۶۷',
  phoneHref: 'tel:+989121234567',
  address: 'تهران، تهرانپارس، ۱۹۶ غربی، نبش ایزد پناه، پلاک ۱۸۸، فست فود پینار',
  hours: 'هر روز ۱۱:۰۰ تا ۲۴:۰۰',
}

export const categories: Category[] = [
  {
    id: 'pizza',
    title: 'پیتزا',
    items: [
      {
        id: 'pepperoni',
        name: 'پیتزا پپرونی',
        description: 'پنیر موزارلا، سس مخصوص و پپرونی تند',
        ingredients: 'خمیر تازه، پنیر موزارلا، پپرونی، سس گوجه',
        price: '۹۶۰٬۰۰۰',
        image: '/images/pepperoni-pizza.jpg',
        badges: ['popular', 'spicy'],
      },
      {
        id: 'special',
        name: 'پیتزا اسپشیال پینار',
        description: 'ترکیبی از گوشت، قارچ، فلفل و زیتون',
        ingredients: 'خمیر، پنیر، گوشت، قارچ، فلفل دلمه، زیتون',
        price: '۱٬۰۹۵٬۰۰۰',
        image: '/images/special-pizza.jpg',
        badges: ['popular'],
      },
      {
        id: 'mixed',
        name: 'پیتزا مخلوط',
        description: 'ژامبون مرغ و گوشت با پنیر فراوان',
        ingredients: 'خمیر تازه، پنیر موزارلا، ژامبون مرغ، ژامبون گوشت',
        price: '۸۵۵٬۰۰۰',
        image: '/images/pepperoni-pizza.jpg',
      },
    ],
  },
  {
    id: 'fried',
    title: 'سوخاری',
    items: [
      {
        id: 'special-chicken',
        name: 'مرغ سوخاری ویژه',
        description: 'مرغ سوخاری ترد و طلایی با ادویه مخصوص پینار',
        ingredients: 'مرغ، آرد مخصوص، ادویه پینار، روغن گیاهی',
        price: '۷۳۵٬۰۰۰',
        image: '/images/fried-chicken.jpg',
        badges: ['popular'],
      },
      {
        id: 'family-bucket',
        name: 'باکت خانواده',
        description: '۱۲ تکه مرغ سوخاری، مناسب برای ۴ نفر',
        ingredients: '۱۲ تکه ران و سینه، سیب‌زمینی، نوشابه خانواده',
        price: '۲٬۳۴۰٬۰۰۰',
        image: '/images/family-bucket.jpg',
        badges: ['popular'],
      },
    ],
  },
  {
    id: 'sandwich',
    title: 'ساندویچ',
    items: [
      {
        id: 'grill-chicken',
        name: 'ساندویچ مرغ گریل',
        description: 'سینه مرغ گریل با کاهو و گوجه در نان کنجدی',
        ingredients: 'مرغ گریل، کاهو، گوجه، سس مخصوص',
        price: '۴۹۵٬۰۰۰',
        image: '/images/chicken-sandwich.jpg',
      },
      {
        id: 'double-burger',
        name: 'برگر دوبل پنیری',
        description: 'دو لایه گوشت چرخ‌کرده با پنیر چدار آب‌شده',
        ingredients: 'گوشت تازه، پنیر چدار، کاهو، گوجه، خیارشور',
        price: '۶۴۵٬۰۰۰',
        image: '/images/beef-burger.jpg',
      },
    ],
  },
  {
    id: 'starter',
    title: 'پیش غذا',
    items: [
      {
        id: 'fries',
        name: 'سیب‌زمینی سرخ‌کرده',
        description: 'سیب‌زمینی طلایی و ترد با نمک مخصوص',
        price: '۲۲۵٬۰۰۰',
        image: '/images/french-fries.jpg',
      },
      {
        id: 'onion-rings',
        name: 'حلقه پیاز',
        description: 'حلقه‌های پیاز سوخاری ترد و خوش‌طعم',
        price: '۲۵۵٬۰۰۰',
        image: '/images/onion-rings.jpg',
      },
    ],
  },
  {
    id: 'drink',
    title: 'نوشیدنی',
    items: [
      {
        id: 'cola',
        name: 'نوشابه کلاسیک',
        description: 'نوشابه خنک سرو شده با یخ',
        price: '۷۵٬۰۰۰',
        image: '/images/cola.jpg',
      },
      {
        id: 'orange-juice',
        name: 'آب پرتقال طبیعی',
        description: 'آب پرتقال تازه و طبیعی',
        price: '۱۹۵٬۰۰۰',
        image: '/images/orange-juice.jpg',
      },
    ],
  },
  {
    id: 'sauce',
    title: 'سس‌ها',
    items: [
      {
        id: 'garlic-sauce',
        name: 'سس سیر',
        description: 'سس سیر خانگی مخصوص پینار',
        price: '۵۴٬۰۰۰',
        image: '/images/garlic-sauce.jpg',
      },
      {
        id: 'spicy-sauce',
        name: 'سس تند',
        description: 'سس تند آتشین مخصوص علاقه‌مندان به تندی',
        price: '۵۴٬۰۰۰',
        image: '/images/spicy-sauce.jpg',
        badges: ['spicy'],
      },
    ],
  },
]

export const featured: MenuItem[] = [
  categories[1].items[0], // مرغ سوخاری ویژه
  categories[1].items[1], // باکت خانواده
  categories[0].items[0], // پیتزا پپرونی
  categories[0].items[1], // پیتزا اسپشیال
]

export const badgeLabels: Record<Badge, string> = {
  popular: 'محبوب',
  spicy: 'تند',
}
