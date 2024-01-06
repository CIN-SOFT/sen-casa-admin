import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  // {
  //   name: 'CASA',
  //   title: true
  // },
  {
    name: 'Comptes',
    url: '/base/accounts',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Programmes',
    url: '/base/programs',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Proprietés',
    url: '/base/properties',
    iconComponent: { name: 'cil-puzzle' },
  },
  // {
  //   name: 'Programmes',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
    // children: [
    //   {
    //     name: 'Liste',
    //     url: '/base/programs'
    //   },
    //   {
    //     name: 'Proprietés',
    //     url: '/base/properties'
    //   },
    //   {
    //     name: 'Nouvelle Proprieté',
    //     url: '/base/property/add'
    //   },
      // {
      //   name: 'Zones',
      //   url: '/base/cards'
      // },
      // {
      //   name: 'Carousel',
      //   url: '/base/carousel'
      // },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    //]
  //},
  {
    name: 'Souscriptions',
    url: '/base/subscriptions',
    iconComponent: { name: 'cil-cursor' },
    // children: [
    //   {
    //     name: 'En attente',
    //     url: '/buttons/buttons'
    //   },
    //   {
    //     name: 'Valide',
    //     url: '/buttons/button-groups'
    //   },
    //   {
    //     name: 'Suspendu',
    //     url: '/buttons/dropdowns'
    //   }
    // ]
  },
  {
    name: 'Transactions',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    // children: [
    //   {
    //     name: 'En cours',
    //     url: '/forms/form-control'
    //   },
    //   {
    //     name: 'Autres',
    //     url: '/forms/select'
    //   },
      // {
      //   name: 'Checks & Radios',
      //   url: '/forms/checks-radios'
      // },
      // {
      //   name: 'Range',
      //   url: '/forms/range'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation'
      // }
   // ]
  },
  // {
  //   name: 'Statistiques',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },
  // {
  //   name: '',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands'
  //     }
  //   ]
  // },
  // {
  //   name: 'Parametrages',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges'
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal'
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    title: true,
    name: 'Administration'
  },
  // {
  //   name: 'Zones',
  //   url: '/admin/zones',
  //   iconComponent: { name: 'cil-star' },
  // },
  // {
  //   name: 'Moyens de paiement',
  //   url: '/admin/payment-method',
  //   iconComponent: { name: 'cil-star' },
  // },
  // {
  //   name: 'Roles',
  //   url: '/admin/roles',
  //   iconComponent: { name: 'cil-star' },
  // },
  {
    name: 'Utilisateurs',
    url: '/admin/users',
    iconComponent: { name: 'cil-user' },
  }
];
