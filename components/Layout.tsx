import React, { ReactNode } from 'react'
import Head from 'next/head'
import Favicon from '../components/Favicon';
import Header from '../components/Header'	
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode
  title?: string,
  header: boolean
}

const Layout = ({ children, header, title = 'This is the default title' }: Props) => {
  // if (typeof window === 'object') {
  //   document.querySelector("body").classList.add('dark:bg-black');
  // }
  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Favicon />
    </Head>
    {header && <Header />}
    {children}
    <Footer />
  </div>
  );
}

export default Layout
