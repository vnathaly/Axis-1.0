import { Console } from "console";
import { STANDUPS } from "../api/standups/data";
import Repro from "../../components/repro";

// const list = STANDUPS.map((m:any) => <li>{m}</li>)

export default function ReproList() {
    return (
        console.log(STANDUPS),
        <>
        {/* <h1>AAAAAA</h1> */}
         {/* <div className="grid grid-cols-3 p-9"> 
            <div className="w-auto h-screem col-span-2">
                <div className="h-133 rounded-md bg-slate-500 m-3 ">
            <h1>AAAAAA</h1>
            
                    {STANDUPS.map((m) => 
                    
                    <ul>
                        <li key={m.id}>
                            
                            <a href="#">hey</a> 
                        </li>
                    </ul>
                    
                    )}
                </div>
                <div className="h-50 rounded-md bg-slate-500 p-2 m-3">Descripcion</div>
                <div className="grid grid-cols-1 gap-2 rounded-md bg-slate-500 m-3 p-2">Comentarios</div>
            </div>
            <div className=" h-full grid grid-cols-1 gap-3 p-2">
                <div className="mt-1 standups">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            <source src="/videoprueba.mp4"/>
                        </video>
                    </figure>
                </div>
                <div className="rounded-md bg-slate-500">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4"> 
                            <source src="/videoprueba.mp4"/>
                         </video>
                    </figure>
                </div>
                <div className="rounded-md bg-slate-500">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            <source src="/videoprueba.mp4"/>
                         </video>
                    </figure>
                </div>
            </div>
         </div>  */}
         
            <Repro/>

        </>
    );
}
