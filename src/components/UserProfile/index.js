import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imgurl, name, role, key} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgurl} className="avatar" alt="avatar" />

      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
