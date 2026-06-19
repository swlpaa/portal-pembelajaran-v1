import { Link } from 'react-router-dom'

function CardMenu({ judul, link }) {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
        cursor: 'pointer'
      }}>
        <h3>{judul}</h3>
      </div>
    </Link>
  )
}

export default CardMenu