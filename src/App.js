import React from 'react'
import AppRoute from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<AppRoute />
		</BrowserRouter>
    </div>
  )
}
