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
    url: '/admin/base/accounts',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Programmes',
    url: '/admin/base/programs',
    iconComponent: { name: 'cil-puzzle' },
  },
  // {
  //   name: 'Proprietés',
  //   url: '/admin/base/properties',
  //   iconComponent: { name: 'cil-puzzle' },
  // },

  // {
  //   name: 'Souscriptions',
  //   url: '/admin/base/subscriptions',
  //   iconComponent: { name: 'cil-cursor' },

  // },
  {
    name: 'Transactions',
    url: '/admin/base/transactions',
    iconComponent: { name: 'cil-notes' },

  },

  {
    title: true,
    name: 'Administration'
  },

  {
    name: 'Utilisateurs',
    url: '/admin/parameters/users',
    iconComponent: { name: 'cil-user' },
  }
];
