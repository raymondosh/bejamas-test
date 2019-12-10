import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../lib/hooks'

function Layout(props) {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
