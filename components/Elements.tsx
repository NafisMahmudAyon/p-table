import React from 'react'
interface ElementProps {
  data: object;
}

const Element: React.FC<ElementProps> = ({ data }) => {
  return (
    <div>
      <span>{data.number}</span>
      a
      <span>{data.symbol}</span>
    </div>
  )
}

export default Element