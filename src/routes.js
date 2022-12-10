import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Company = React.lazy(() => import('./views/master/company/Company'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/master', name: 'Master', element: Company, exact: true },
  { path: '/master/company', name: 'Company', element: Company },
]

export default routes
