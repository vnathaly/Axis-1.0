import { STANDUPS } from "../app/api/standups/data";

export default function Repro() {
    return (
        <>
            <div className="grid grid-cols-3 p-9">
                <div className="h-full grid grid-cols-1 gap-3 p-2">
                    {STANDUPS.map((data) =>
                        <ul>
                            <li key={data.id}>
                                <div className="rounded-md bg-slate-500">
                                    <a href={data.url}>
                                        {data.description}
                                        {data.autor}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            </div></>
    )
}