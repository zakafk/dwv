import { FC, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom';

import  {NAV_MAP, PATH_NAMES } from '../../constants/navigation';
import { AboutCookie, AboutTerms, PrivacyPolicy } from '../../module';

import './App.scss'

export const App: FC = () => {
  const routes = useMemo(() => {
    return NAV_MAP.map(({ title, to, element}) => (
      <Route key={title} path={to} element={element} />
    ))
  }, [NAV_MAP]);

  return (
    <div className="App">
      <Routes>
        {routes}
        <Route path={PATH_NAMES.ABOUT_COOKIE} element={<AboutCookie />} />
        <Route path={PATH_NAMES.ABOUT_TERMS} element={<AboutTerms />} />
        <Route path={PATH_NAMES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
