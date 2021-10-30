/* import '../../styles/globals.css' */
 import 'tailwindcss/tailwind.css' /*
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp */


// #region Global Imports

import App, { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../redux/store/store'
import { Store } from 'redux'

class _App extends App {
  static async getInitialProps ({ Component, ctx }:any) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      }
    }
  }

  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const {
      Component,
      pageProps,
    } = this.props

    return (  <Component {...pageProps} />
      
    )
  }
}

export default store.withRedux(_App)


