"use client"

import {NavigationMenu,NavigationMenuItem, NavigationMenuLink} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar(){
    return(
        <NavigationMenu>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href={"/"}>Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href={"/users"}>Users</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href={"/posts"}>Posts</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Button onClick={()=>console.log("pressed")}>Press me</Button>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}