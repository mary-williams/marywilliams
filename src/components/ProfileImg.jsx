import ProfileImg from '/public/MARY3432.jpg'

function ProfileImage() {
  return (
    <div className="profile">
      <img src={ProfileImg} alt="My Picture!" />
    </div>
  )
}

export default ProfileImage