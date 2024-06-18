import './index.css'

const TechnologiesDetails = props => {
  const {technologyCard} = props
  const {title, description, imgUrl, className} = technologyCard
  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default TechnologiesDetails
