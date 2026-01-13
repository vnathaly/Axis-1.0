import { STANDUPS } from "../app/api/standups/data";
import Iframe from 'react-iframe';

export default function ReproList() {
    return (
        <>
            <div className="rounded-md">
                 <div className=" h-full grid grid-cols-1 gap-3 p-2">

                {STANDUPS.map((data) => {
                    if (data.id !== 1) {
                        return (
                            <div key={data.id} className="rounded-md p-2  cursor-pointer mt-1 standups">
                                <Iframe url={data.url}
                                    width="100%"
                                    height="260px"
                                    id="data.id"
                                    className="rounded-md"
                                />
                            </div>
                        )
                    }
                })}
            </div>
            </div>
        </>
    )
}
