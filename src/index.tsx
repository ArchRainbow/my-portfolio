import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import MyWorks from './pages/works';
import App from './pages/homepage';
import Resume from './pages/resume';
import Contacts from './pages/contacts';
import Hangman from './pages/hangman';
import { IntlProvider } from 'react-intl';
import { messages, defaultLocale } from './translations';
import { LocaleContext } from './translations/localeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/works",
    element: <MyWorks />
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/hangman',
    element: <Hangman />
  },
]);

function MyApp() {
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <RouterProvider router={router} />
      </IntlProvider>
    </LocaleContext.Provider>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<MyApp />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
