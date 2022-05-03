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
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Favicon />
      </Head>
      {header && <Header />}
      <div className="flex flex-col justify-between h-full">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout
