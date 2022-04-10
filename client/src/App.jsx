import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import Error404Page from './pages/Error404Page'
import routes from './routes'


export default function App() {
  return (
    <Suspense fallback={Loading}>
      <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={route.element || <Error404Page />}
            />
          ))}
          <Route path="/404" element={<Error404Page />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </Suspense>
  )
}