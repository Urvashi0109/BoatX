import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link ,Route , Routes} from 'react-router-dom'
import App from './App'
import Products from './main/AllProducts'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
				<Routes>
          <Route path="/" element={<App />} />
         
          <Route path="/products" element={<Products />} />
				</Routes>
        <div className='w-full text-white h-[25px] bg-black justifu-center text-center '>
      ॐ BOATx @ 2023 ॐ || Made by Urvashi Choubey
      </div>
			</BrowserRouter>

  </React.StrictMode>,
)
