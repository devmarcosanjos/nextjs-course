import { GamePadIcon, HomeIcon, PriceIcon, UserIcon, WalkthroughsIcon } from "@/components"

const NavBarList = ({ children, className }) => {
    return (
        <ul className="{`my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}`}">
            {children}
        </ul>
    )
}

const NavBarListItem = ({ children, className }) => {
    return (
        <li className="{`group my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center ${className}`}">
            {children}
        </li>
    )
}

export const NavBar = () => {
    return (
        <nav className="flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300">
            <div className="flex items-center justify-center">
                <img src="https://soildata.mapbiomas.org/logos/navbar/soildata-m.png" alt="Logo SoilData" className="w-auto h-12 p-2 my-4  " />
            </div>

            <NavBarList className={"flex-grow"}>
                <NavBarListItem>
                    <HomeIcon className="w-4 h-4 group-hover:text-slate-50 " />
                    Home
                </NavBarListItem>
                <NavBarListItem>
                    <GamePadIcon className="w-4 h-4  group-hover:text-slate-50" />
                    Games
                </NavBarListItem>
                <NavBarListItem>
                    <PriceIcon className="w-4 h-4 group-hover:text-slate-50" />
                    Top 10
                </NavBarListItem>
                <NavBarListItem>
                    <WalkthroughsIcon className="w-4 h-4 group-hover:text-slate-50" />
                    Walkthroughs
                </NavBarListItem>
            </NavBarList>

            <NavBarList>
                <NavBarListItem>
                    <UserIcon className="w-4 h-4 group-hover:text-slate-50" />
                    User
                </NavBarListItem>
            </NavBarList>

        </nav>
    )
}