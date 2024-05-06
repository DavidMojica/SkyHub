import Switch_day from "./switch_day"
const Header = () =>{
    return(
        <header className={'font-poppins flex justify-around items-center py-6 sticky top-0'}>
            <img src="./logo.png" alt="" className="w-40 rounded-full bg-blend-soft-light" />
            <ul className="flex items-center">
                <li className="mx-12"><a href="#">Link 1</a></li>
                <li className="mx-12"><a href="#">Link 2</a></li>
                <li className="mx-12"><a href="#">Link 3</a></li>
                <li className="mx-12"><a href="#">Link 4</a></li>
            </ul>

            <Switch_day />
        </header>
    )
}

export default Header