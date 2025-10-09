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
        description: "",
        url: "https://youtu.be/h90yBuHAJh8"
    },
    {
        id: 2,
        title: "DataViz: Haz que tus gráficos cuenten la historia",
        autor: "Lea Espinal",
        description: "",
        url: "https://youtu.be/rnK5E95Y4gg"
    },
    {
        id: 3,
        title: "Web Accessibility pt. 2 - enfocada en ejemplos",
        autor: "Oscar Polanco",
        description: "",
        url: "https://youtu.be/7iGDr7rY9rg"
    },
    {
        id: 4,
        title: "Web Accessibility",
        autor: "Oscar Polanco",
        description: "",
        url: "https://youtu.be/Y7MuWF5W2Rs"
    },
    {
        id: 5,
        title: "International Collegiate Programming Contest, un concurso que cambia vidas",
        autor: "Dovier Ripolll",
        description: "",
        url: "https://youtu.be/OpPaZqmCH5w"
    },
    {
        id: 6,
        title: "Gestión de monorepos con Turborepo",
        autor: "Crhistopher Suriel",
        description: "",
        url: "https://youtu.be/Q76sLQ7SYxo"
    },
    {
        id: 7,
        title: "Planning de un viaje a la luna",
        autor: "Edrey de Aza",
        description: "",
        url: "https://www.youtube.com/watch?v=Dr9bl0kZS6E&feature=youtu.be"
    },
    {
        id: 8,
        title: "Standup sobre los standups",
        autor: "Lea Espinal",
        description: "",
        url: "https://youtu.be/a_3-v87yD2s"
    },
    {
        id: 9,
        title: "Por qué la UX importa en cada proyecto,",
        autor: "Jerson Cuebas",
        description: "",
        url: "https://youtu.be/YuYMfXseMSA"
    },
    {
        id: 10,
        title: "Deconstruir para reconstruir",
        autor: "Erick Dominici",
        description: "",
        url: "https://youtu.be/fraE2W2FfPY"
    },
    {
        id: 11,
        title: "Dominando el arte de la autoconfianza",
        autor: "Oliver Félix Berrido",
        description: "",
        url: "https://youtu.be/GFoPS5IBSqE"
    },
    {
        id: 12,
        title: "Cómo integrar aplicaciones con OpenAI para potenciarlas con IA",
        autor: "Fermín Perdomo",
        description: "",
        url: "https://youtu.be/5BZE47O1mAk"
    },
    {
        id: 13,
        title: "Aprovecha al Máximo tu Seguro de Salud",
        autor: "ARS Universal",
        description: "",
        url: "https://youtu.be/4oxM9SSHDAA"
    },
    {
        id: 14,
        title: "The New Gold Standard",
        autor: "FireFighters",
        description: "",
        url: "https://youtu.be/VVl97bD9zNQ"
    },
    {
        id: 15,
        title: "Imitemos de los Grandes Personajes de la Historia",
        autor: "Edrey de Aza",
        description: "",
        url: "https://youtu.be/PTtMXDAp2-Y"
    },
    {
        id: 16,
        title: "Diseño de presentaciones",
        autor: "Lea Espinal",
        description: "",
        url: "https://youtu.be/V02BOskHF-0"
    },
    {
        id: 17,
        title: "A Brief Intro To Machine Learning",
        autor: "Juan Ortíz",
        description: "",
        url: "https://youtu.be/nRsEC1N3xZE"
    },
    {
        id: 18,
        title: "Licencia de Paternidad",
        autor: "Dalisa Heredia",
        description: "",
        url: "https://youtu.be/JtwpFJF3wI4"
    },
    {
        id: 19,
        title: "Cómo armar tu PC Gamer",
        autor: "Jhan Almonte",
        description: "",
        url: "https://youtu.be/OgkMmY6bgpw"
    },
    {
        id: 20,
        title: "Yo no soy político",
        autor: "Stacy Santos",
        description: "",
        url: "https://youtu.be/CKscYSI9jdE"
    },
    {
        id: 21,
        title: "S.O.L.I.D Software Design Principles",
        autor: "Yelmi Almonte",
        description: "",
        url: "https://youtu.be/-osbyYAoCpU" 
    },
    {
        id: 22,
        title: "Certificación PMP",
        autor: "Elizabeth Torres",
        description: "",
        url: "https://youtu.be/Lqrw8nIPeMM"
    },
    {
        id: 23,
        title: "Visual Thinking,",
        autor: "Lea Espinal",
        description: "",
        url: "https://youtu.be/O2rCrZ8W83Y"
    },
    {
        id: 24,
        title: "Esterica tus chelitos: Como ahorrar en tus compras online",
        autor: "Diagmy Núñez",
        description: "",
        url: "https://youtu.be/xgVLGwD0TSI"
    },
    {
        id: 25,
        title: "Usando la bolsa de valores de RD",
        autor: "Alberto Espinal",
        description: "",
        url: "https://youtu.be/ijyKYXM318o"
    },
    {
        id: 26,
        title: "UX",
        autor: "Lorelvis Estévez",
        description: "",
        url: ""
    }
]
