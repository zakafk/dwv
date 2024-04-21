import { FC, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import { NAV_MAP } from '../../constants/navigation';

import './App.scss'

export const App: FC = () => {
  const routes = useMemo(() => {
    return NAV_MAP.map(({ title, to, element}) => <Route key={title} path={to} element={element} />)
  }, [NAV_MAP]);

  return (
    <div className="App">
      <Routes>{routes}</Routes>
    </div>
  )
}

export default App
