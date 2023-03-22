import './App.scss';
import RegisterForm from './components/ResgisterForm/ResgisterForm';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';
import { IntlProvider, FormattedMessage } from 'react-intl';
import React from 'react';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  default:
    defaultMessages = Spanish;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='app'>
        <RegisterForm></RegisterForm>
        <h2>Selector de idioma</h2>
        <button onClick={() => setMessages(Spanish)}>
          <FormattedMessage id='app:spanish' />
        </button>
        <button onClick={() => setMessages(English)}>
          <FormattedMessage id='app:english' />
        </button>
        <button onClick={() => setMessages(French)}>
          <FormattedMessage id='app:french' />
        </button>
      </div>
    </IntlProvider>
  );
}

export default App;

/*  <select onChange={event => {
<option value='es-ES'>Spanish</option>
<option value='en-EN'>English</option>
<option value='fr-FR'>French</option>
        }}>

          </select> */
