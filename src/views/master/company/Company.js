import React, { useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilPlus,
  cilArrowThickFromRight,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import ComapanyForm from './form'

const Comapany = () => {
  const [addScreenVisible, setAddScreenVisible] = useState(false)
  const tableExample = [
    {
      avatar: { src: avatar1 },
      user: {
        name: 'Yiorgos Avraamu',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2 },
      user: {
        name: 'Avram Tarasios',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3 },
      user: { name: 'Quintin Ed', registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4 },
      user: { name: 'Enéas Kwadwo', registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5 },
      user: {
        name: 'Agapetus Tadeáš',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6 },
      user: {
        name: 'Friderik Dávid',
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Company</strong>
          <div className="float-end">
            <CButton
              color="primary"
              shape="rounded-pill"
              className="add-btn"
              onClick={(e) => {
                e.preventDefault()
                setAddScreenVisible(!addScreenVisible)
              }}
            >
              {addScreenVisible ? (
                <CIcon icon={cilArrowThickFromRight} />
              ) : (
                <CIcon icon={cilPlus} />
              )}
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          {addScreenVisible ? (
            <ComapanyForm />
          ) : (
            <CTable align="middle" className="mb-0" responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                  <CTableHeaderCell>Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableExample.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={item.avatar.src} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        Registered: {item.user.registered}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" icon={item.payment.icon} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <span className="small text-medium-emphasis">Last login </span>
                      <strong>{item.activity}</strong>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          )}
        </CCardBody>
      </CCard>
    </>
  )
}

export default Comapany
