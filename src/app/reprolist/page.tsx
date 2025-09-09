// import "../login.css"

export default function reproList() {
    return (
        <>
         <div className="grid grid-cols-3 p-9"> 
            <div className="w-auto h-full col-span-2">
                <div className="h-133 rounded-md  bg-gray-600 m-3 ">
                    {/* Aqui va un video */}
                </div>
                <div className="h-50 rounded-md bg-gray-600 p-2 m-3">Descripcion</div>
                <div className="grid grid-cols-1 gap-2  bg-gray-600 m-3 p-2">Comentarios</div>
            </div>
            <div className=" h-full grid grid-cols-1 gap-3 p-2">
                <div className="mt-1 bg-gray-600 rounded-md">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            {/* <source src="/videoprueba.mp4"/> */}
                        </video>
                    </figure>
                </div>
                <div className=" bg-gray-600 rounded-md">
                    <figure>
                        <video className="w-full" src="/videoprueba.mp4">
                            {/* <source src="/videoprueba.mp4"/> */}
                        </video>
                    </figure>
                </div>
                <div className=" bg-gray-600 rounded-md">
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
