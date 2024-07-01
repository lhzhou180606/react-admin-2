// +---------------------------------
// | 本地路由表
// +---------------------------------

import type { RouteObjectType } from '@/router/types';

export const DEFAULT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const SIGNUP_ROUTE = '/signup';

const routes: RouteObjectType[] = [
  {
    path: DEFAULT_ROUTE,
    key: 'root',
    name: 'Root',
    component: '/layouts',
    children: [
      {
        key: 'index',
        index: true,
        name: 'Home',
        fullPath: '/',
        hideInMenu: true,
        redirect: '/dashboards/blog',
      },
      {
        key: 'pages',
        type: 'group',
        name: 'Pages',
        // path: 'pages',
        children: [
          {
            name: 'Dashboards',
            key: 'pages.dashboards',
            icon: 'waterfall-flow-tones',
            path: 'dashboards',
            children: [
              {
                index: true,
                key: 'pages.dashboards.blog',
                name: 'Blog',
                path: 'blog',
                fullPath: '/dashboards/blog',
                component: '/pages/dashboards/blog',
                // access: 'pages.dashboards.blog',
              },
              {
                key: 'pages.dashboards.fashion',
                name: 'Fashion',
                path: 'fashion',
                fullPath: '/dashboards/fashion',
                component: '/pages/dashboards/fashion',
              },
              {
                key: 'pages.dashboards.ecommerce',
                name: 'Ecommerce',
                path: 'ecommerce',
                fullPath: '/dashboards/ecommerce',
                component: '/pages/dashboards/ecommerce',
              },
              {
                key: 'pages.dashboards.team',
                name: 'Team',
                path: 'team',
                fullPath: '/dashboards/team',
                component: '/pages/dashboards/team',
              },
              {
                key: 'pages.dashboards.project',
                name: 'Project',
                path: 'project',
                fullPath: '/dashboards/project',
                component: '/pages/dashboards/project',
              },
              {
                key: 'pages.dashboards.todo',
                name: 'Todo',
                path: 'todo',
                fullPath: '/dashboards/todo',
                component: '/pages/dashboards/todo',
              },
              {
                key: 'pages.dashboards.crypto',
                name: 'Crypto',
                path: 'crypto',
                fullPath: '/dashboards/crypto',
                component: '/pages/dashboards/crypto',
              },
            ],
          },
          {
            name: 'Authorisation',
            key: 'pages.authorisation',
            icon: 'shield-lock-tones',
            path: 'auth',
            children: [
              {
                key: 'login',
                name: 'Login',
                fullPath: '/login',
              },
              {
                key: 'signup',
                name: 'Signup',
                fullPath: '/signup',
              },
              {
                key: 'forgot-password',
                name: 'Forgot Password',
                fullPath: '/forgot-password',
              },
              {
                key: 'roles',
                name: 'Roles',
                path: 'roles',
                fullPath: '/auth/roles',
              },
              {
                key: 'permissions',
                name: 'Permissions',
                path: 'permissions',
                fullPath: '/auth/permissions',
              },
              {
                key: 'organization',
                name: 'Organization',
                path: 'organization',
                fullPath: '/auth/organization',
              },
            ],
          },
          {
            name: 'Settings',
            key: 'pages.settings',
            icon: 'gear-2-tones',
            path: 'settings',
            fullPath: '/settings',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Profile',
            key: 'pages.profile',
            icon: 'contacts-tones',
            path: 'profile',
            fullPath: '/profile',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Utility',
            key: 'pages.utility',
            icon: 'apps-tones',
            path: 'utility',
            fullPath: '/utility',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
        ],
      },
      {
        key: 'layouts',
        type: 'group',
        name: 'Layouts',
        // path: 'layouts',
        children: [
          {
            name: 'Table',
            key: 'layouts.table',
            icon: 'table-chart-2-tones',
            path: 'table',
            children: [
              {
                name: 'Basic',
                key: 'layouts.table.basic',
                path: 'basic',
                fullPath: '/table/basic',
                component: '/pages/table/basic',
              },
              {
                name: 'Query',
                key: 'layouts.table.query',
                path: 'query',
                fullPath: '/table/query',
                component: '/pages/table/query',
              },
              {
                name: 'View',
                key: 'layouts.table.view',
                path: 'view',
                fullPath: '/table/view',
                component: '/pages/table/view',
              },
              {
                name: 'Segment',
                key: 'layouts.table.segment',
                path: 'segment',
                fullPath: '/table/segment',
                component: '/pages/table/segment',
              },
            ],
          },
          {
            name: 'List',
            key: 'layouts.list',
            icon: 'list-view-tones',
            path: 'list',
            children: [
              {
                key: '',
                name: '',
              }
            ]
            //fullPath: '/list',
          },
          {
            name: 'Flex',
            key: 'layouts.flex',
            icon: 'column-tones',
            path: 'flex',
            children: [
              {
                key: '',
                name: '',
              }
            ]
            //fullPath: '/layouts/flex',
          },
          {
            name: 'Grid',
            key: 'layouts.grid',
            icon: 'grid-tones',
            path: 'grid',
            children: [
              {
                key: 'layouts.grid.posts',
                name: 'Posts',
                path: 'posts',
                fullPath: '/grid/posts',
                component: '/pages/grid/posts',
              },
              {
                key: 'layouts.grid.users',
                name: 'Users',
                path: 'users',
                fullPath: '/grid/users',
                component: '/pages/grid/users',
              },
              {
                key: 'layouts.grid.tasks',
                name: 'Tasks',
                path: 'tasks',
                fullPath: '/grid/tasks',
                component: '/pages/grid/tasks',
              },
              {
                key: 'layouts.grid.groups',
                name: 'Groups',
                path: 'groups',
                fullPath: '/grid/groups',
                component: '/pages/grid/groups',
              },
            ],
          },
        ],
      },
      {
        key: 'apps',
        type: 'group',
        name: 'Apps',
        //path: 'apps',
        children: [
          {
            name: 'Ecommerce',
            key: 'apps.ecommerce',
            icon: 'cart-tones',
            path: 'ecommerce',
            children: [
              {
                key: 'apps.ecommerce.products',
                name: 'Products',
                path: 'products',
                fullPath: '/ecommerce/products',
                component: '/pages/ecommerce/products',
              },
              {
                key: 'apps.ecommerce.orders',
                name: 'Orders',
                path: 'orders',
                fullPath: '/ecommerce/orders',
                component: '/pages/ecommerce/orders',
              },
              {
                key: 'apps.ecommerce.customers',
                name: 'Customers',
                path: 'customers',
                fullPath: '/ecommerce/customers',
                component: '/pages/ecommerce/customers',
              },
              {
                key: 'apps.ecommerce.shops',
                name: 'Shops',
                path: 'shops',
                fullPath: '/ecommerce/shops',
                component: '/pages/ecommerce/shops',
              },
              {
                key: 'apps.ecommerce.checkout',
                name: 'Checkout',
                path: 'checkout',
                fullPath: '/ecommerce/checkout',
                component: '/pages/ecommerce/checkout',
              },
            ],
          },
          {
            name: 'Email',
            key: 'apps.email',
            icon: 'mail-tones',
            path: 'email',
            fullPath: '/email',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Chat',
            key: 'apps.chat',
            icon: 'message-circle-2-tones',
            path: 'chat',
            fullPath: '/chat',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Projects',
            key: 'apps.projects',
            icon: 'box-tones',
            path: 'projects',
            fullPath: '/projects',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Tasks',
            key: 'apps.tasks',
            icon: 'document-check-tones',
            path: 'tasks',
            fullPath: '/tasks',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Crypto',
            key: 'apps.crypto',
            icon: 'wallet-tones',
            path: 'crypto',
            fullPath: '/crypto',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Invoices',
            key: 'apps.invoices',
            icon: 'seal-tones',
            path: 'invoices',
            fullPath: '/invoices',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Medias',
            key: 'apps.medias',
            icon: 'file-box-tones',
            path: 'medias',
            fullPath: '/medias',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
        ],
      },
      {
        key: 'components',
        type: 'group',
        name: 'Components',
        //path: 'components',
        children: [
          {
            name: 'Forms',
            key: 'components.forms',
            icon: 'switch-button-tones',
            path: 'forms',
            fullPath: '/forms',
            children: [
              {
                key: '',
                name: '',
              }
            ]
          },
          {
            name: 'Charts',
            key: 'components.charts',
            icon: 'ranking-tones',
            path: 'charts',
            children: [
              {
                key: 'components.charts.antv',
                name: 'AntV',
                path: 'antv',
                fullPath: '/charts/antv',
                component: '/pages/charts/antv',
              },
              {
                key: 'components.charts.recharts',
                name: 'Recharts',
                path: 'recharts',
                fullPath: '/charts/recharts',
                component: '/pages/charts/recharts',
              },
              {
                key: 'components.charts.echarts',
                name: 'Echarts',
                path: 'echarts',
                fullPath: '/charts/echarts',
                component: '/pages/charts/echarts',
              },
              {
                key: 'components.charts.apexcharts',
                name: 'ApexCharts',
                path: 'apexcharts',
                fullPath: '/charts/apexcharts',
                component: '/pages/charts/apexcharts',
              },
            ],
          },
          {
            name: 'Icons',
            key: 'components.icons',
            icon: 'apps-3-tones',
            path: 'icons',
            children: [
              {
                key: 'components.icons.local',
                name: 'Local',
                path: 'local',
                fullPath: '/icons/local',
                component: '/pages/icons/local',
              },
              {
                key: 'components.icons.package',
                name: 'Package',
                path: 'package',
                fullPath: '/icons/package',
                component: '/pages/icons/package',
              },
              {
                key: 'components.icons.remote',
                name: 'Remote',
                path: 'remote',
                fullPath: '/icons/remote',
                component: '/pages/icons/remote',
              },
            ],
          },
          {
            name: 'Editors',
            key: 'components.editors',
            icon: 'pen-tones',
            path: 'editors',
            children: [
              {
                key: 'components.editors.cms',
                name: 'CMS',
                path: 'cms',
                fullPath: '/editors/cms',
                component: '/pages/editors/cms',
              },
              {
                key: 'components.editors.page',
                name: 'Page',
                path: 'page',
                fullPath: '/editors/page',
                component: '/pages/editors/page',
              },
              {
                key: 'components.editors.flow',
                name: 'Flow',
                path: 'flow',
                fullPath: '/editors/flow',
                component: '/pages/editors/flow',
              },
              {
                key: 'components.editors.code',
                name: 'Code',
                path: 'code',
                fullPath: '/editors/code',
                component: '/pages/editors/code',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'auth',
    component: '/layouts/auth',
    hideInMenu: true,
    children: [
      {
        path: LOGIN_ROUTE,
        key: 'auth.login',
        component: '/pages/auth/login',
      },
      {
        path: SIGNUP_ROUTE,
        key: 'auth.signup',
        component: '/pages/auth/signup',
      },
      {
        path: '/forgot-password',
        key: 'auth.forgot-password',
        component: '/pages/auth/forgot-password',
      },
    ],
  },
  {
    key: 'exception',
    component: '/layouts/frame',
    hideInMenu: true,
    children: [
      {
        path: 'error',
        key: 'exception.error',
        component: '/pages/exception/500',
      },
      {
        path: 'forbidden',
        key: 'exception.forbidden',
        component: '/pages/exception/403',
      },
      {
        path: '*',
        key: 'exception.not-found',
        component: '/pages/exception/404',
      },
    ],
  },
];

export default routes;
