import React from 'react'
import {Helmet} from "react-helmet";

const Meta = ({title, description}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to ZZaZZo',
    description: 'The Best of ZZaZZo, Curated by Creatives'
}

export default Meta