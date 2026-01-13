import { STANDUPS } from "../app/api/standups/data";
import Iframe from 'react-iframe';

export default function Repro() {
    return (
        <>
            <div className="grid grid-cols-3 p-9">

                    {STANDUPS.map((data) => {
                        
                        if (data.id === 1) {
                            return (
                                <div className=" h-full col-span-2">
                                <div key={data.id} className="rounded-md p-2  cursor-pointer w-auto h-full h-screem col-span-2">
                                    <Iframe url={data.url}
                                        width="640px"
                                        height="320px"
                                        id="data.id"
                                        className=""
                                        display="block"
                                        position="relative" />
                                </div>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div className="h-full grid grid-cols-3 gap-3 p-2">
                                 <ul >
                                    <div key={data.id} className="rounded-md p-2 cursor-pointer ">
                                        <Iframe url={data.url}
                                            width="640px"
                                            height="320px"
                                            id="data.id"
                                            className=""
                                            display="block"
                                            position="relative" />
                                    </div>
                                </ul>
                                </div>
                               
                            )
                        
                        }
                    }
                    )}
            
                {/* <div className="col-span-2 h-full grid grid-cols-1 gap-3 p-2">
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

                        )}
                    </ul>
                </div> */}
            </div>
            {/* <h1>WORKING</h1> */}
        </>
    )
}