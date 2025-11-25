import * as React from "react"
import { graphql } from "gatsby"


const NotFoundPage = ({ data, location }) => {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>Please take a momement to let us know.</p>
    </>
  )
}

export const Head = () => <div> 404: Not Found </div>

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
