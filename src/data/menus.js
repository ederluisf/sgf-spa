export default [
  {
    action: 'library_books',
    title: 'Cadastros',
    subMenus: [
      { title: 'Montadoras', action: 'build', route: 'manufacturer' },
      { title: 'Modelos', action: 'directions_car', route: 'model' },
      { title: 'Veículos', action: 'directions_car', route: 'vehicle' }
    ]
  },
  {
    action: 'local_activity',
    title: 'Manutenções',
    subMenus: [{ title: 'List Item' }]
  },
  {
    action: 'restaurant',
    title: 'Dining',
    active: true,
    subMenus: [
      { title: 'Breakfast & brunch' },
      { title: 'New American' },
      { title: 'Bauru' },
      { title: 'Sushi' }
    ]
  }
]
