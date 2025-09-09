// import "../login.css"

export default function reproList() {
    return (
        <>
         <div className="grid grid-cols-3 gap-2 p-9"> 
            <div className="w-auto h-full gap-2 col-span-2">
                <div className=" h-133">Video</div>
                <div className=" h-50 rounded-md ">Descripcion</div>
                <div className="grid grid-cols-1">Comentarios</div>
            </div>
            <div className=" h-full grid grid-cols-1">Mas videos</div>
            
         </div>
        </>
    );
}
