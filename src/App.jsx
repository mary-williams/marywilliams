import './App.css'
import ProfileImg from '/public/MARY3432.jpg'

function App() {
  return (
    <>
      <div className="header-row">
        <div className="profile">
          <img src={ProfileImg} alt="My Picture!" width={120} />
        </div>
        <div className="title">
          <h1>Hi, I'm Mary <span className="subtitle">an aspiring Front End Developer</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
