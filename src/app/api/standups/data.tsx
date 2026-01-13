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
        url: "https://www.youtube.com/embed/h90yBuHAJh8?si=Vm3MOcTDhbqYMX-I"
    },
    {
        id: 2,
        title: "DataViz: Haz que tus gráficos cuenten la historia",
        autor: "Lea Espinal",
        description: "",
        url: "https://www.youtube.com/embed/rnK5E95Y4gg?si=sGi84DTDyFFjNO-c"
    },
    {
        id: 3,
        title: "Web Accessibility pt. 2 - enfocada en ejemplos",
        autor: "Oscar Polanco",
        description: "",
        url: "https://www.youtube.com/embed/7iGDr7rY9rg?si=WYSGQ1Dqe2S476wA"
    },
    {
        id: 4,
        title: "Web Accessibility",
        autor: "Oscar Polanco",
        description: "",
        url: "https://www.youtube.com/embed/Y7MuWF5W2Rs?si=glDSi0Lic5QD8Wng"
    },
    {
        id: 5,
        title: "International Collegiate Programming Contest, un concurso que cambia vidas",
        autor: "Dovier Ripolll",
        description: "",
        url: "https://www.youtube.com/embed/OpPaZqmCH5w?si=YA7f2DAEZVYS0PNF"
    },
    {
        id: 6,
        title: "Gestión de monorepos con Turborepo",
        autor: "Crhistopher Suriel",
        description: "",
        url: "https://www.youtube.com/watch?v=Dr9bl0kZS6E&feature=youtu.be"
    },
    {
        id: 7,
        title: "Planning de un viaje a la luna",
        autor: "Edrey de Aza",
        description: "",
        url: "https://www.youtube.com/embed/Q76sLQ7SYxo?si=PtrJKfp463DD3AC5"
    },
    {
        id: 8,
        title: "Standup sobre los standups",
        autor: "Lea Espinal",
        description: "",
        url: "https://www.youtube.com/embed/a_3-v87yD2s?si=FLAZr57la63pzHgT"
    },
    {
        id: 9,
        title: "Por qué la UX importa en cada proyecto,",
        autor: "Jerson Cuebas",
        description: "",
        url: "https://www.youtube.com/embed/YuYMfXseMSA?si=wM91xOqbzDSWrpME"
    },
    {
        id: 10,
        title: "Deconstruir para reconstruir",
        autor: "Erick Dominici",
        description: "",
        url: "https://www.youtube.com/embed/fraE2W2FfPY?si=mamP-PC99tlhPPtK"
    },
    {
        id: 11,
        title: "Dominando el arte de la autoconfianza",
        autor: "Oliver Félix Berrido",
        description: "",
        url: "https://www.youtube.com/embed/GFoPS5IBSqE?si=6gZOut_v6KrBXe6B"
    },
    {
        id: 12,
        title: "Cómo integrar aplicaciones con OpenAI para potenciarlas con IA",
        autor: "Fermín Perdomo",
        description: "",
        url: "https://www.youtube.com/embed/5BZE47O1mAk?si=x4uxDOJp5vCo_N94"
    },
    {
        id: 13,
        title: "Aprovecha al Máximo tu Seguro de Salud",
        autor: "ARS Universal",
        description: "",
        url: "https://www.youtube.com/embed/4oxM9SSHDAA?si=iRVrgJjEKDwgnJky"
    },
    {
        id: 14,
        title: "The New Gold Standard",
        autor: "FireFighters",
        description: "",
        url: "https://www.youtube.com/embed/VVl97bD9zNQ?si=JwxmNSGq0IRH2WMP"
    },
    {
        id: 15,
        title: "Imitemos de los Grandes Personajes de la Historia",
        autor: "Edrey de Aza",
        description: "",
        url: "https://www.youtube.com/embed/PTtMXDAp2-Y?si=nUuRLW5wzEOXkjoR"
    },
    {
        id: 16,
        title: "Diseño de presentaciones",
        autor: "Lea Espinal",
        description: "",
        url: "https://www.youtube.com/embed/V02BOskHF-0?si=gTnYyVqGosiymeVV"
    },
    {
        id: 17,
        title: "A Brief Intro To Machine Learning",
        autor: "Juan Ortíz",
        description: "",
        url: "https://www.youtube.com/embed/nRsEC1N3xZE?si=7D0dpfbKjO3r9zhx"
    },
    {
        id: 18,
        title: "Licencia de Paternidad",
        autor: "Dalisa Heredia",
        description: "",
        url: "https://www.youtube.com/embed/JtwpFJF3wI4?si=Vn6RwNK_9hc3NMaI"
    },
    {
        id: 19,
        title: "Cómo armar tu PC Gamer",
        autor: "Jhan Almonte",
        description: "",
        url: "https://www.youtube.com/embed/OgkMmY6bgpw?si=JENXIVawM_IwNVt_"
    },
    {
        id: 20,
        title: "Yo no soy político",
        autor: "Stacy Santos",
        description: "",
        url: "https://www.youtube.com/embed/CKscYSI9jdE?si=RBxcKlt_ua5-0qB1"
    },
    {
        id: 21,
        title: "S.O.L.I.D Software Design Principles",
        autor: "Yelmi Almonte",
        description: "",
        url: "https://www.youtube.com/embed/-osbyYAoCpU?si=00nyz-pP-KGHhFXK" 
    },
    {
        id: 22,
        title: "Certificación PMP",
        autor: "Elizabeth Torres",
        description: "",
        url: "https://www.youtube.com/embed/Lqrw8nIPeMM?si=7AVYd1V5pmFS-HHl"
    },
    {
        id: 23,
        title: "Visual Thinking,",
        autor: "Lea Espinal",
        description: "",
        url: "https://www.youtube.com/embed/O2rCrZ8W83Y?si=_-9vYnSFS52Tp2_Y"
    },
    {
        id: 24,
        title: "Esterica tus chelitos: Como ahorrar en tus compras online",
        autor: "Diagmy Núñez",
        description: "",
        url: "https://www.youtube.com/embed/xgVLGwD0TSI?si=NkFCRs-L1m3pAfJ8"
    },
    {
        id: 25,
        title: "Usando la bolsa de valores de RD",
        autor: "Alberto Espinal",
        description: "",
        url: "https://www.youtube.com/embed/ijyKYXM318o?si=2Wti9B4weZp4uTiM"
    },
    {
        id: 26,
        title: "UX",
        autor: "Lorelvis Estévez",
        description: "",
        url: ""
    }
]
