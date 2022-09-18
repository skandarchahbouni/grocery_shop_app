import { Provider, useDispatch } from 'react-redux'
import PopUp from '../component/modals'
import { store } from '../states/store'
import '../axios/global'


function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <PopUp />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
