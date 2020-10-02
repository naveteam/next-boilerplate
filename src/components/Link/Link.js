import React, { createElement } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const EXTERNAL = 'external'
const INTERNAL = 'internal'

const LinkComponent = ({ variant = INTERNAL, textVariant, href, children, ...props }) => {
  const ExternalLink = createElement(
    LinkText,
    {
      ...(variant === EXTERNAL && { href }),
      as: 'a',
      variant: textVariant,
      ...props
    },
    children
  )

  switch (variant) {
    case INTERNAL:
    default:
      return <Link href={href}>{ExternalLink}</Link>
    case EXTERNAL:
      return ExternalLink
  }
}

const LinkText = styled(Text)`
  text-decoration: ${({ textDecoration }) => textDecoration};
`

LinkComponent.defaultProps = {
  textDecoration: 'underline'
}

LinkComponent.propTypes = {
  variant: PropTypes.oneOf([EXTERNAL, INTERNAL]),
  textVariant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  textDecoration: PropTypes.string
}

export default LinkComponent
