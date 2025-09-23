import { url } from "inspector";
import { title } from "process";

type Standup = {
    id: number;
    title: string;
    autor: string;
    description: string;
    url: string;
}

export const STANDUPS = [
    {
        id: 1,
        title: "La IA: Tu nuevo compañero de equipo",
        autor: "Sergio Lantigua",
        description: "Daily team standup meeting",
        url: "https://youtu.be/h90yBuHAJh8"
    },
    {
        id: 2,
        title: "Web Accessibility pt. 2 - enfocada en ejemplos"
    }
]