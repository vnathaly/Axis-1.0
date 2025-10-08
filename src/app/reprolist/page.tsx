import { Console } from "console";
import { STANDUPS } from "../api/standups/data";

export default function reproList() {
    return (
        <>
         <div className="grid grid-cols-3 p-9"> 
            <div className="w-auto h-screem col-span-2">
                <div className="h-133 rounded-md bg-slate-500 m-3 ">
                    <video>{STANDUPS.map((m) => 
                    
                    <ul>
                        <li key={m.id}>
                            <a href="m.url" target="Video"/>
                        </li>
                    </ul>
                    
                    )}</video>
                </div>
                <div className="h-50 rounded-md bg-slate-500 p-2 m-3">Descripcion</div>
                <div className="grid grid-cols-1 gap-2 rounded-md bg-slate-500 m-3 p-2">Comentarios</div>
            </div>
            <div className=" h-full grid grid-cols-1 gap-3 p-2">
                <div className="mt-1 standups">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            {/* <source src="/videoprueba.mp4"/> */}
                        </video>
                    </figure>
                </div>
                <div className="rounded-md bg-slate-500">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            {/* <source src="/videoprueba.mp4"/> */}
                        </video>
                    </figure>
                </div>
                <div className="rounded-md bg-slate-500">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            {/* <source src="/videoprueba.mp4"/> */}
                        </video>
                    </figure>
                </div>
            </div>
         </div>
        </>
    );
}
