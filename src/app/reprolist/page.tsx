// import "../login.css"

export default function reproList() {
    return (
        <>
         <div className="grid grid-cols-3 gap-2 p-9"> 
            <div className="w-auto h-full gap-2 col-span-2">
                <div className="h-133 rounded-md bg-violet-400 m-3">

                </div>
                <div className="h-50 rounded-md bg-violet-300 p-2 m-3">Descripcion</div>
                <div className="grid grid-cols-1 gap-2 bg-violet-300 m-3">Comentarios</div>
            </div>
            <div className=" h-full grid grid-cols-1 gap-3  bg-violet-300 m-3 p-2">Mas videos</div>
         </div>
        </>
    );
}
