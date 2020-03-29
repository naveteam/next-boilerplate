import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const siteMetadata = {
  title: 'Qual é a sua música de estimação?',
  description: 'Você só precisa de uma música de estimação. A gente toca as próximas.',
  author: '@Spotify'
}

const SEO = ({ description = '', lang = 'pt-br', meta = [], title }) => {
  const metaDescription = description || siteMetadata.description
  const siteTitle = title || siteMetadata.title

  const siteImage = 'https://cdn.musicadeestimacao.byspotify.com/siteImage.png'

  const metaTags = [
    {
      name: 'description',
      content: metaDescription
    },
    {
      name: 'image',
      content: siteImage
    },
    {
      property: 'og:title',
      content: 'Descubra as suas também.'
    },
    {
      property: 'og:description',
      content: 'Acabei de descobrir as minhas músicas de estimação no Spotify. E as suas, quais são? #MusicaDeEstimação'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // {
    //   name: 'og:image',
    //   content: siteImage
    // },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: siteMetadata.author
    },
    {
      name: 'twitter:title',
      content: 'Descubra as suas também.'
    },
    {
      name: 'twitter:image',
      content: siteImage
    },
    {
      name: 'twitter:description',
      content: 'Acabei de descobrir as minhas músicas de estimação no Spotify. E as suas, quais são? #MusicaDeEstimação'
    },
    {
      name: 'keywords',
      content: ['spotify', 'musica']
    },
    ...meta,
    {
      property: 'og:image:width',
      content: '640'
    },
    {
      property: 'og:image:height',
      content: '442'
    }
  ]

  return (
    <Head>
      <title>{siteTitle}</title>
      {metaTags.map((metatag, index) => (
        <meta key={index} {...metatag} />
      ))}
    </Head>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
