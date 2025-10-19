export interface Pairing {
  id: string;
  name: string;
  characters: string[];
  popularity: number;
  description: string;
  reasons: string[];
  category: 'popular' | 'forgotten' | 'medium';
  image: string;
}

export const pairings: Pairing[] = [
  {
    id: 'kaebedo',
    name: 'Kaebedo',
    characters: ['Кэйа', 'Альбедо'],
    popularity: 95,
    category: 'popular',
    description: 'Один из самых популярных пейрингов в фандоме Genshin Impact.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    reasons: [
      'Противоположности притягиваются: холодный расчётливый Кэйа и спокойный учёный Альбедо',
      'Множество взаимодействий в квестах и ивентах',
      'Их химия в диалогах и совместных сценах',
      'Общие темы одиночества и поиска себя'
    ]
  },
  {
    id: 'zhongchi',
    name: 'Zhongchi',
    characters: ['Чжун Ли', 'Тарталья'],
    popularity: 92,
    category: 'popular',
    description: 'Архонт и Предвестник — классический enemies-to-lovers троп.',
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80',
    reasons: [
      'Динамика "враги → союзники → что-то большее"',
      'Контраст между мудрым архонтом и импульсивным воином',
      'Их история в квесте Лиюэ',
      'Взаимное уважение несмотря на разные стороны'
    ]
  },
  {
    id: 'xiaother',
    name: 'Xiaother',
    characters: ['Сяо', 'Итэр'],
    popularity: 88,
    category: 'popular',
    description: 'Якша-хранитель и путешественник, который помог ему открыться.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    reasons: [
      'Сяо впервые открывается кому-то за тысячелетия',
      'Путешественник — единственный, кого Сяо зовёт по имени',
      'Их совместные квесты и история',
      'Защитник и тот, кого он защищает'
    ]
  },
  {
    id: 'eimiko',
    name: 'EiMiko',
    characters: ['Райдэн Эй', 'Яэ Мико'],
    popularity: 85,
    category: 'popular',
    description: 'Вечная Сёгун и её верная жрица с историей длиной в века.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    reasons: [
      'Столетия дружбы и взаимопонимания',
      'Яэ — единственная, кто может быть честной с Эй',
      'Их драматичная история и расставание',
      'Канонические флиртующие диалоги'
    ]
  },
  {
    id: 'kaeluc',
    name: 'Kaeluc',
    characters: ['Кэйа', 'Дилюк'],
    popularity: 80,
    category: 'popular',
    description: 'Бывшие братья с болезненным прошлым.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
    reasons: [
      'Сложная история их разрыва',
      'Всё ещё заботятся друг о друге несмотря на конфликт',
      'Потенциал примирения',
      'Классический troupe fallen brothers'
    ]
  },
  {
    id: 'beiguang',
    name: 'Beiguang',
    characters: ['Бэй Доу', 'Нин Гуан'],
    popularity: 75,
    category: 'medium',
    description: 'Капитан пиратов и Тяньцюань — противоположности, которые дополняют друг друга.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80',
    reasons: [
      'Контраст между свободолюбивой пираткой и деловой женщиной',
      'Взаимное уважение и восхищение',
      'Их шахматные партии',
      'История о том, как Нин Гуан выкупила корабль Бэй Доу'
    ]
  },
  {
    id: 'cynari',
    name: 'Cynari',
    characters: ['Сайно', 'Тигнари'],
    popularity: 70,
    category: 'medium',
    description: 'Генерал-инспектор и лесной страж — старые друзья с академии.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    reasons: [
      'Учились вместе в академии',
      'Сайно единственный, кто ценит шутки Тигнари',
      'TCG партнёры',
      'Взаимная забота и поддержка'
    ]
  },
  {
    id: 'haikaveh',
    name: 'Haikaveh',
    characters: ['Альхайтам', 'Кавех'],
    popularity: 82,
    category: 'popular',
    description: 'Соседи по комнате с постоянными спорами и глубокой связью.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    reasons: [
      'Живут вместе несмотря на постоянные споры',
      'Знают друг друга лучше всех',
      'Противоположные мировоззрения, но общие ценности',
      'Их динамика в ивентах невероятно жива'
    ]
  },
  {
    id: 'thomato',
    name: 'Thomato',
    characters: ['Тома', 'Аято'],
    popularity: 65,
    category: 'medium',
    description: 'Глава клана Камисато и его верный помощник.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    reasons: [
      'Тома безгранично предан Аято',
      'Аято доверяет Томе больше всех',
      'Их совместная работа для клана',
      'Классический lord and retainer троп'
    ]
  },
  {
    id: 'kazuscara',
    name: 'Kazuscara',
    characters: ['Кадзуха', 'Странник'],
    popularity: 60,
    category: 'medium',
    description: 'Поэт-самурай и искупающий вину странник.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    reasons: [
      'Оба потеряли близких людей',
      'Тема искупления и прощения',
      'Контраст спокойствия и агрессии',
      'Потенциал для взаимного исцеления'
    ]
  },
  {
    id: 'xiaobedo',
    name: 'Сяобедо',
    characters: ['Сяо', 'Альбедо'],
    popularity: 35,
    category: 'forgotten',
    description: 'Один из самых забытых пейрингов, хотя у них есть интересная динамика.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    reasons: [
      'Оба не совсем люди (якша и искусственное создание)',
      'Тема одиночества и поиска своего места',
      'Ученый, который мог бы понять природу Сяо',
      'Минимум канонических взаимодействий, но большой потенциал'
    ]
  },
  {
    id: 'cytham',
    name: 'Cytham',
    characters: ['Сайно', 'Альхайтам'],
    popularity: 40,
    category: 'forgotten',
    description: 'Два серьёзных и умных человека с разными подходами.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
    reasons: [
      'Оба интеллектуалы в своих областях',
      'Контраст строгого правосудия и холодной логики',
      'Могли бы дополнять друг друга',
      'Мало канонических взаимодействий'
    ]
  },
  {
    id: 'xingyun',
    name: 'Xingyun',
    characters: ['Син Цю', 'Чун Юнь'],
    popularity: 55,
    category: 'medium',
    description: 'Лучшие друзья детства с противоположными характерами.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    reasons: [
      'Дружат с детства',
      'Син Цю постоянно разыгрывает Чун Юня',
      'Заботятся друг о друге',
      'Часто упоминают друг друга в диалогах'
    ]
  },
  {
    id: 'baizhu-zhongli',
    name: 'Baizhu/Zhongli',
    characters: ['Бай Чжу', 'Чжун Ли'],
    popularity: 30,
    category: 'forgotten',
    description: 'Два мудрых и древних существа.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    reasons: [
      'Оба связаны с договорами (Чаншэн и Бай Чжу)',
      'Тема жертвенности ради других',
      'Могли бы понять бремя друг друга',
      'Практически нет взаимодействий в игре'
    ]
  },
  {
    id: 'wriolette',
    name: 'Wriolette',
    characters: ['Риоле', 'Нёвиллет'],
    popularity: 78,
    category: 'popular',
    description: 'Верховный судья и герцог крепости Меропиде.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80',
    reasons: [
      'Взаимное уважение и профессиональное сотрудничество',
      'Их чайные встречи',
      'Контраст строгого дракона и расслабленного герцога',
      'Яркие моменты в квесте Фонтейна'
    ]
  }
];