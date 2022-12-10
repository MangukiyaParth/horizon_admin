import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Master',
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/master/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
