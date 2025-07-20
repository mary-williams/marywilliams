import './InfoBox.css'

function InfoBox({ header, children, size }) {
  return (
    <div className={`info-box ${size}`}>
      {header && <div className="info-box-header">{header}</div>}
      {children}
    </div>
  )
}

export default InfoBox