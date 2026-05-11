import './LoadingScreen.css'

export default function LoadingScreen({ isLoading }) {
  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-container">
        <div className="loader-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="loading-text">Loading Portfolio...</span>
      </div>
    </div>
  )
}