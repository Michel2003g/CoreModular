import logo from '../assets/img/logo.png';

const SearchBlock = () => {
  return (
    <section className='searchblock'>
      <img className='logo' src={logo} alt="logo" />
      <p className='subinfo'>Here you'll find all documentation of module's for Roblox created by Michel2003g.</p>
      <input className='SearchBar' type="text" placeholder='Search'/>
    </section>
  )
}

export default SearchBlock
