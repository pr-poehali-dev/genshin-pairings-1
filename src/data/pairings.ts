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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/f9a65af7-9c29-4abb-9fd4-8b05504c65da.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/7b985452-9cb1-4101-b8c3-c6e8bf497213.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/e0b4d968-fb8f-4cc6-8cb5-64075730172f.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/a64a315b-718a-47f0-b8d2-328609c77572.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/48338e3b-d11a-4b3a-b1b6-92a029a1c241.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/eb346111-582a-4168-992c-1921fed90053.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/7f05c60c-e614-4d3b-bc70-84a554cf2dff.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/a3bd1029-c3cc-4061-9f3c-fe150382c961.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/ed9522fd-fa0c-494f-89a4-d8dbeb451e68.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/3d1dceba-07a4-4f33-8c12-6fbcb72f2279.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/1712d78f-3233-4f1b-b5f1-89023ca3d709.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/8fb965b6-854b-41d1-a962-a931a7708986.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/2a71ca1f-8057-4808-b025-b60f3455d0da.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/5d4e7a13-f5f8-43a8-bc6e-911b2cccf743.jpg',
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
    image: 'https://cdn.poehali.dev/projects/ab2cfd1e-fa31-425a-bb3b-74822950e4cd/files/dbc05c01-98fb-4410-b949-54d0bc01331e.jpg',
    reasons: [
      'Взаимное уважение и профессиональное сотрудничество',
      'Их чайные встречи',
      'Контраст строгого дракона и расслабленного герцога',
      'Яркие моменты в квесте Фонтейна'
    ]
  }
];