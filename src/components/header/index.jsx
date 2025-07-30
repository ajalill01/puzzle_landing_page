import './index.css'
import logo from '../../assets/puzzle-removebg-preview.png';



function Header(){
    return(
        <nav className='flex flex-row justify-between w-[85%] bg-[var(--color-white-opp)] mx-auto mt-[32px] items-center
         text-[var(--color-white)]
         border border-[var(--color-white-op)] border-1 rounded-2xl
         px-4 py-2 mb-[32px] shadow-[0px_2px_8px_0px_rgba(255,255,255,0.2)] '>
            <div className="flex flex-row w-[64px] h-[64px] items-center text-inherit">
                <img src={logo} alt="logo" />
                <p className='text-inherit font-semibold text-[24px]'>Puzzle</p>
            </div>

            <div className='flex flex-row w-[70%] items-center text-inherit justify-between'>
                <a className='text-inherit opacity-90 text-[16px]' href="#products">Products</a>
                <a className='text-inherit opacity-90 text-[16px]' href="#customers">Customers</a>
                <a className='text-inherit opacity-90 text-[16px]' href="#company">Company</a>
                <a className='text-inherit opacity-90 text-[16px]' href="#pricing">Pricing</a>
                <button className='
                text-[var(--color-fourth)]
                border border-[var(--color-fourth)] border-2
                px-6 py-2 rounded-md 
                hover:bg-[var(--color-fourth)] hover:text-[var(--color-primary)] transition-all duration-300 ease-in-out
                '>Log in</button>
                <button className='
                text-[var(--color-primary)] font-semibold
                bg-[var(--color-fourth)]
                border border-[var(--color-fourth)] border-2
                px-6 py-2 rounded-md 
                hover:bg-transparent hover:text-[var(--color-fourth)] transition-all duration-300 ease-in-out hover:border-transparent
                '>Get started for free</button>
            </div>
        </nav>
    )
}

export default Header