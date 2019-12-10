import React from 'react'

import Layout from '../components/Layout'

export function IndexPageTemplate({}) {
  return (
    <>
      <h1>Index Page</h1>
    </>
  )
}

IndexPageTemplate.propTypes = {}

function IndexPage() {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {}

export default IndexPage
