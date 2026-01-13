import { STANDUPS } from "../app/api/standups/data";
import Iframe from 'react-iframe';

export default function Repro() {
    return (
        <>
            <div className="grid grid-cols-3 p-9">
                <div className="h-full grid grid-cols-1 gap-3 p-2">
                    <ul >
                        {STANDUPS.map((data) =>
                        
                            <div className="rounded-md p-2">
                                <Iframe url={data.url}
                                    width="640px"
                                    height="320px"
                                    id="data.id"
                                    className=""
                                    display="block"
                                    position="relative" />
                            </div>
                                
                                // <div className="rounded-md bg-slate-500">

                                //     <a href={data.url}>
                                //         <h1></h1>
                                //         {data.autor}
                                //         {data.description}
                                //     </a>
                                // </div>
                        
                        )}
                    </ul>
                </div>
            </div>
            {/* <h1>WORKING</h1> */}
        </>
    )
}