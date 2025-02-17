import imgLogo from '../../public/img/logo-nobg.png';


const Logo = ( { className='' } ) => {
    return (
        <img 
            className={`${className}`} 
            src={imgLogo}/>
    )
}

export default Logo;