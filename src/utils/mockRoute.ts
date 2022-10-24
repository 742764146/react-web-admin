//动态路由数据,模拟后端接口
const trees = [
  {
    menuName: '主页',
    routePath: '/home',
    children: [
      {
        menuName: '首页',
        routePath: '/home/index',
        children: [
          {
            menuName: '首页2',
            routePath: '/home/index/details'
          }
        ]
      }
    ]
  },
  {
    menuName: '系统管理',
    routePath: '/system',
    children: [
      {
        menuName: '部门管理',
        routePath: '/system/department'
      },
      {
        menuName: '菜单管理',
        routePath: '/system/menu'
      },
      {
        menuName: '角色管理',
        routePath: '/system/role'
      },
      {
        menuName: '用户管理',
        routePath: '/system/user'
      }
    ]
  }
]

export default trees
