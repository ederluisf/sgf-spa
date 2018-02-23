export default [
  {
    action: 'library_books',
    title: 'Cadastros',
    subMenus: [
      { title: 'Montadoras', action: 'build', route: 'Manufacturer' }
    ]
  },
  {
    action: 'local_activity',
    title: 'Attractions',
    subMenus: [{ title: 'List Item' }]
  },
  {
    action: 'restaurant',
    title: 'Dining',
    active: true,
    subMenus: [
      { title: 'Breakfast & brunch' },
      { title: 'New American' },
      { title: 'Sushi' }
    ]
  }
]