import React, { useState } from 'react'
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormFloating,
} from '@coreui/react'

const ComapanyForm = () => {
  const [profileUrl, setProfileUrl] = useState('')
  const [coverUrl, setCoverUrl] = useState('')

  function handleProfileChange(e) {
    if (e.target.files.length) {
      setProfileUrl(URL.createObjectURL(e.target.files[0]))
    } else {
      setProfileUrl('')
    }
  }
  function handleCoverChange(e) {
    if (e.target.files.length) {
      setCoverUrl(URL.createObjectURL(e.target.files[0]))
    } else {
      setCoverUrl('')
    }
  }
  return (
    <>
      <CForm>
        <CRow>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="name" placeholder="name" />
              <CFormLabel htmlFor="name">Name</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="username" placeholder="username" />
              <CFormLabel htmlFor="username">Username</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="phone" placeholder="phone" />
              <CFormLabel htmlFor="phone">Phone</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="email" id="email" placeholder="email" />
              <CFormLabel htmlFor="email">Email</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="language" placeholder="language" />
              <CFormLabel htmlFor="language">Language</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}></CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="businessname" placeholder="businessname" />
              <CFormLabel htmlFor="businessname">Business Name</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <CFormFloating className="mb-3">
              <CFormInput type="text" id="businesscategory" placeholder="businesscategory" />
              <CFormLabel htmlFor="businesscategory">Business Category</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={12}>
            <CFormFloating className="mb-3">
              <CFormTextarea
                type="text"
                id="professionalsummery"
                placeholder="professionalsummery"
                style={{ height: '100px' }}
              />
              <CFormLabel htmlFor="professionalsummery">Professional Summery</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <div className="mb-3">
              <CFormLabel htmlFor="profile">Profile</CFormLabel>
              <CFormInput
                type="file"
                id="profile"
                placeholder="profile"
                size="lg"
                onChange={handleProfileChange}
              />
              {profileUrl !== '' ? <img src={profileUrl} alt="" className="mt-4 sample-img" /> : <></>}
            </div>
          </CCol>
          <CCol xs={12} sm={12} md={6}>
            <div className="mb-3">
              <CFormLabel htmlFor="coverimage">Cover Image</CFormLabel>
              <CFormInput
                type="file"
                id="coverimage"
                placeholder="coverimage"
                size="lg"
                onChange={handleCoverChange}
              />
              {coverUrl !== '' ? <img src={coverUrl} alt="" className="mt-4 sample-img" /> : <></>}
            </div>
          </CCol>
        </CRow>
      </CForm>
    </>
  )
}

export default ComapanyForm
