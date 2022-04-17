import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from '../components/Header'	
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode
  title?: string,
  header: boolean
}

const Layout = ({ children, header, title = 'This is the default title' }: Props) => (
  <div className="dark:bg-black">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {header && <Header />}
    {children}
    <Footer />
  </div>
)

export default Layout
