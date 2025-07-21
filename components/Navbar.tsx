"use client"

import {NavigationMenu, NavigationMenuLink} from "./ui/navigation-menu";
import Link from "next/link";
import ApiComponent from "./ApiMode";

export default function Navbar(){
    const testMode= process.env.NEXT_PUBLIC_TEST_DATA==="true"?true:false;
    return(
        <NavigationMenu className="border-b-1 border-neutral-100">
            <div className="flex flex-1 justify-between px-5 py-3 max-w-[1200px]">
                <div className="flex">
                    <NavigationMenuLink asChild>
                        <Link href={"/"}>Posts</Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                        <Link href={"/users"}>Users</Link>
                    </NavigationMenuLink>
                </div>
                <div className="flex items-center"> 
                    <ApiComponent TestMode={testMode}/>
                </div> 
            </div> 
        </NavigationMenu>
    )
}