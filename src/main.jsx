import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './component/common/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './component/pages/Login.jsx'
import Layout from './Layout.jsx'
import Dashboard from './component/pages/Dashboard.jsx'
import AddColor from './component/pages/color/AddColor.jsx'
import ViewColor from './component/pages/color/ViewColor.jsx'
import ViewMaterial from './component/pages/material/ViewMaterial.jsx'
import AddMaterial from './component/pages/material/AddMaterial.jsx'
import AddCountry from './component/pages/country/AddCountry.jsx'
import ViewCountry from './component/pages/country/ViewCountry.jsx'
import AddFaq from './component/pages/Faq/AddFaq.jsx'
import ViewFaq from './component/pages/Faq/ViewFaq.jsx'
import Addparent from './component/pages/Parent/Addparent.jsx'
import Viewparent from './component/pages/Parent/Viewparent.jsx'
import AddSubcat from './component/pages/Subcategories/AddSubcat.jsx'
import ViewSubcat from './component/pages/Subcategories/ViewSubcat.jsx'
import AddSubsubcat from './component/pages/SubsubCategories/AddSubsubcat.jsx'
import ViewSubsubcat from './component/pages/SubsubCategories/ViewSubsubcat.jsx'
import User from './component/pages/User.jsx'
import Orders from './component/pages/Orders.jsx'
import Enquiry from './component/pages/Enquiries/Enquiry.jsx'
import Newsletter from './component/pages/Enquiries/Newsletter.jsx'
import Addproduct from './component/pages/Products/Addproduct.jsx'
import Viewproduct from './component/pages/Products/Viewproduct.jsx'
import Addwhychoose from './component/pages/WhyChooseUs/Addwhychoose.jsx'
import Viewwhychoose from './component/pages/WhyChooseUs/Viewwhychoose.jsx'
import Viewslider from './component/pages/Slider/Viewslider.jsx'
import Addslider from './component/pages/Slider/Addslider.jsx'
import Addtestimonial from './component/pages/Testimonial/Addtestimonial.jsx'
import Viewtestimonial from './component/pages/Testimonial/Viewtestimonial.jsx'
import Companyprofile from './component/pages/Profile/Companyprofile.jsx'
import Selfprofile from './component/pages/Profile/Selfprofile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path='/user' element={<User />} />


          <Route path='/color'>
            <Route path="add" element={<AddColor />} />
            <Route path="view" element={<ViewColor />} />
          </Route>

          <Route path='/material'>
            <Route path="add" element={<AddMaterial />} />
            <Route path="view" element={<ViewMaterial />} />
          </Route>

          <Route path='/country'>
            <Route path="add" element={<AddCountry />} />
            <Route path="view" element={<ViewCountry />} />
          </Route>

          <Route path='/Faq'>
            <Route path="add" element={<AddFaq />} />
            <Route path="view" element={<ViewFaq />} />
          </Route>

          <Route path='/Parent'>
            <Route path='add' element={<Addparent />} />
            <Route path='view' element={<Viewparent />} />
            <Route path='Subcategories'>
              <Route path='add' element={<AddSubcat />} />
              <Route path='view' element={<ViewSubcat />} />
            </Route>
            <Route path='SubsubCategories'>
              <Route path='add' element={<AddSubsubcat />} />
              <Route path='view' element={<ViewSubsubcat />} />
            </Route>
          </Route>

          <Route path='/order'>
            <Route path='view' element={<Orders />} />
          </Route>

          <Route path='/enquiries'>
            <Route path="add" element={<Enquiry />} />
            <Route path="view" element={<Newsletter />} />
          </Route>

          <Route path='/Products'>
            <Route path="add" element={<Addproduct />} />
            <Route path="view" element={< Viewproduct />} />
          </Route>

          <Route path='/WhyChooseUs'>
            <Route path="add" element={<Addwhychoose />} />
            <Route path="view" element={< Viewwhychoose />} />
          </Route>

          <Route path='/Slider'>
            <Route path="add" element={<Addslider/>} />
            <Route path="view" element={< Viewslider />} />
          </Route>

          <Route path='/Testimonial'>
            <Route path="add" element={<Addtestimonial/>} />
            <Route path="view" element={< Viewtestimonial />} />
          </Route>

          <Route path='/Profile'>
            <Route path="Selfprofile" element={<Selfprofile/>} />
            <Route path="Companyprofile" element={<Companyprofile />} />
          </Route>



        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
