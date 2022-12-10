import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const User = React.lazy(() => import('./views/master/user/User'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/master', name: 'Master', element: User, exact: true },
  { path: '/master/user', name: 'User', element: User },
]

export default routes
