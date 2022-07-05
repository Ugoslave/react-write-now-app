const books = [
  {
    id: '0012561',
    author: 'Эдгар Аллан По',
    title: 'Бочонок Амонтильядо',
    image: 'https://images.unsplash.com/photo-1654223345432-821fff408ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
  {
    id: '0074561',
    author: 'Эрнест Миллер Хемингуэй',
    title: 'Старик и море',
    image: 'https://images.unsplash.com/photo-1652447385283-817463bd31af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: '0073254',
    author: 'Гарриет Элизабет Бичер-Стоу',
    title: 'Хижина дяди Тома',
    image: 'https://images.unsplash.com/photo-1651178248143-8f5ad2895134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80',
  },
  {
    id: '0825460',
    author: 'Борис Леонидович Пастернак',
    title: 'Доктор Живаго',
    image: 'https://images.unsplash.com/photo-1650038132376-5bb0e549e19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  },
  {
    id: '0108056',
    author: 'Иван Алексеевич Бунин',
    title: 'Тёмные аллеи',
    image: 'https://images.unsplash.com/photo-1652711899409-f880413f76c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '0279665',
    author: 'Роберт Льюис Стивенсон',
    title: 'Остров сокровищ',
    image: 'https://images.unsplash.com/photo-1583790696684-a4b19bcd11fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
  },
  {
    id: '0011122',
    author: 'Мигель де Сервантес',
    title: 'Хитроумный идальго Дон Кихот Ламанчский',
    image: 'https://images.unsplash.com/photo-1642451642527-d24409e62e21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '0934455',
    author: 'Джеймс Фенимор Купер',
    title: 'Последний из могикан',
    image: 'https://images.unsplash.com/photo-1650532596364-37b8a537f3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1428&q=80',
  },
  {
    id: '0724244',
    author: 'Марк Твен',
    title: 'Таинственный незнакомец',
    image: 'https://images.unsplash.com/photo-1590580673113-7069eb048d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: '0523899',
    author: 'Александр Дюма',
    title: 'Граф Монте-Кристо',
    image: 'https://images.unsplash.com/photo-1652172328131-cba66c7c18c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    id: '0164321',
    author: 'Михаил Булгаков',
    title: 'Морфий',
    image: 'https://images.unsplash.com/photo-1650278387528-4e3dbde17d04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: '0037655',
    author: 'Иван Сергеевич Тургенев',
    title: 'Ася',
    image: 'https://images.unsplash.com/photo-1626453746494-d1a96a8e5389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: '0237240',
    author: 'Висенте Рива Паласио',
    title: 'Пираты Мексиканского залива',
    image: 'https://images.unsplash.com/photo-1636909279544-1068e5bc28d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: '0033361',
    author: 'Феррейра де Кастро',
    title: 'Сельва',
    image: 'https://images.unsplash.com/photo-1648475245789-2c9c0535426e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '0082002',
    author: 'Стивен Кинг',
    title: 'Зелёная миля',
    image: 'https://images.unsplash.com/photo-1653573985426-7612c5898560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '0093644',
    author: 'Стиг Ларссон',
    title: 'Миллениум',
    image: 'https://images.unsplash.com/photo-1560763150-d8dcf921e321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
];

export default books;
