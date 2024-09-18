import logo from '../../assets/icons/logo.png';

function Nav(){
    return (
        <div className='nav'>
            <img className="nav--foto" src={logo} alt="AirBnB logo" width={100}/>
        </div>
    )
}

export default Nav;