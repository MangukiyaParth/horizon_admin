import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import SvgComponent from './bg';
import { userloginauth } from 'src/api/auth'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrorMsg] = useState("Add username and password");
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#e55353"></rect>
        </svg>
        <strong className="me-auto">Error!</strong>
        <small></small>
      </CToastHeader>
      <CToastBody>{errormsg}</CToastBody>
    </CToast>
  )

  const userlogin = async (e) => {
    if (username && password) {
      const resp = await userloginauth({ "phone": username, "password": password })
      if (resp.status) {
        window.location.href = 'dashboard';
      }
      else {
        await setErrorMsg(resp.message)
        addToast(exampleToast)
      }
    } else {
      await setErrorMsg("Add username and password")
      addToast(exampleToast)
    }
  }
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CToaster ref={toaster} push={toast} placement="top-end" />
      <SvgComponent style={{ position: 'absolute', height: '100%', width: '100%' }} />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4 login-card">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} className="login-icon" />
                      </CInputGroupText>
                      <CFormInput
                        className="login-form-control"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => {
                          setUsername(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} className="login-icon" />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="login-form-control"
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={8}>
                        <CButton color="primary" className="px-4" onClick={userlogin}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={4} className="text-right">
                        <Link to="/register">
                          <CButton color="link" tabIndex={-1}>
                            Register Now!
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
