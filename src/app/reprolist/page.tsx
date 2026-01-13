import { Console } from "console";
import { STANDUPS } from "../api/standups/data";
import Repro from "../../components/repro";
import Iframe from 'react-iframe';

// const list = STANDUPS.map((m:any) => <li>{m}</li>)

export default function ReproList() {
    return (
        console.log(STANDUPS),
        <>
       
          <div className="grid grid-cols-3 p-9"> 
            <div className="w-auto h-screem col-span-2">
                <div className="h-133 rounded-md bg-slate-500 m-3 ">
                     {STANDUPS.map((data) => {
                        
                        if (data.id === 1) {
                            return (
                                <div key={data.id} className="rounded-md p-2  cursor-pointer h-full">
                                    <Iframe url={data.url}
                                        width="100%"
                                        height="100%"
                                        id="data.id"
                                        className=""
                                        display="block"
                                        position="relative" />
                                </div>
                            )
                        }
                    })}
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
                    {STANDUPS.map((data) => {
                        
                        if (data.id !== 1) {
                            return (
                                <div key={data.id} className="rounded-md p-2  cursor-pointer mt-1 standups">
                                    <Iframe url={data.url}
                                        width="100%"
                                        height="260px"
                                        id="data.id"
                                        className=""
                                        />
                                </div>
                            )
                        }
                    })}
                </div>
                
            </div>
         </div> 
         
            {/* <Repro/> */}

        </>
    );
}
