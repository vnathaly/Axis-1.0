import { type NavbarItem } from "@/lib/navbar/navbar-items";
import Link from "next/link";

export function NavbarItem({name, url, icon : Icon}: NavbarItem){
    return (
        <li>
            <Link href={url}>
            <Icon />
                {name}
            </Link>
        </li>
    )
}
