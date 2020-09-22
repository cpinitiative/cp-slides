/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react'
import Context from '../context'
import useDeck from '../hooks/use-deck'
import useSwipe from '../hooks/use-swipe'
import { modes } from '../constants'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

export const Slide = ({ slide, index, preview, ...props }) => {
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fixed(height: 48, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <Context.Provider value={context}>
      <div sx={{
        bg: 'background',
        height: context.mode === modes.print ? '100vh' : '100%',
      }}>
        <div
          {...(!preview ? swipeProps : {})}
          sx={{
            boxSizing: 'border-box',
            width: '80%',
            margin: "0 auto",
            height: context.mode === modes.print ? '100vh' : '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            color: 'text',
            bg: 'background',
            variant: 'styles.Slide',
          }}>
          {slide}
        </div>
        <a
          href="https://joincpi.org/"
          target="_blank"
          sx={{
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            color: 'white',
          }}
        >
          <Img
            fixed={data.img.childImageSharp.fixed}
            alt="CP Initiative"
            sx={{
              maxHeight: "12rem"
            }}
          />
        </a>
      </div>
    </Context.Provider>
  )
}

export default Slide
