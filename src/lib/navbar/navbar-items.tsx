import { IconType } from "react-icons";
import { AiTwotoneHome, AiOutlineInfoCircle, AiOutlineQuestionCircle } from "react-icons/ai";

export type NavbarItem = {
    name: string;
    url: string;
    icon: IconType
}

export const navBarItems: NavbarItem[] = [
    {
        name: "Home",
        url: "/",
        icon: AiTwotoneHome
    },

    {
        name: "About",
        url: "/about",
        icon: AiOutlineInfoCircle
    },

    {
        name: "Questions",
        url: "/questions",
        icon: AiOutlineQuestionCircle
    }
]