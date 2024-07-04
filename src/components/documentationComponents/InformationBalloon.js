import logo from '../../assets/img/logo.png';
import info from '../../assets/img/info_icon.png';
import warning from '../../assets/img/warning_icon.png';

{/* <img className='logo' src={logo} alt="logo" /> */}

const InformationBalloon = ({type, children}) => {
  if (type === 'info') {
    return (
      <div className={"balloon" + " " + type} id={type}>
        <img className='icon' src={info} alt="logo" />
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className={"balloon" + " " + type} id={type}>
      <img className='icon' src={warning} alt="logo" />
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default InformationBalloon
