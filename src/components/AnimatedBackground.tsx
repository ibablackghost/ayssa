import './AnimatedBackground.css'

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="bg-gradient"></div>
      <div className="bg-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>
      <div className="bg-grid"></div>
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  )
}

export default AnimatedBackground



