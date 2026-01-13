import { STANDUPS } from "../app/api/standups/data";
import Iframe from 'react-iframe';

export default function DisplayedVideo() {
    return (
        <>
         <div className="w-auto h-screem col-span-2">
            <div className="h-133 rounded-md m-3 ">
                {STANDUPS.map((data) => {
                    if (data.id === 1) {
                        return (
                            <>
                            <div key={data.id} className="rounded-md p-2  cursor-pointer h-full">
                                <Iframe url={data.url}
                                    width="100%"
                                    height="100%"
                                    id="data.id"
                                    className="rounded-md"
                                    position="relative" />
                            </div>
                            <div className=" grid grid-cols-1 gap-2 rounded-md m-3 p-2 ">
                                 <p>Description</p>
                            </div>
                            <div className="grid grid-cols-1  rounded-md bg-slate-500 m-3 p-2">Comentarios</div>
                            </>
                        )
                    }
                })}
            </div>
            </div>
        </>
    )
}
