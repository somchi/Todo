import { Provider } from 'react-redux'
import store from '../store'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import '../styles/index.scss'

let persistor = persistStore(store);


const App=({ Component, pageProps }: AppProps)=> {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
    </Provider>
  )
}

export default App