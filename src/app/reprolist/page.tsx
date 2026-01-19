import { Console } from "console";
import { STANDUPS } from "../api/standups/data";
import DisplayedVideo from "../../components/displayedVideo";
import ReproList from "@/components/reproList";
import Iframe from 'react-iframe';
import Comments from "@/components/comemts";    

// const list = STANDUPS.map((m:any) => <li>{m}</li>)

export default function ReproducctionView() {

    return (
        console.log(STANDUPS),
        <>
          <div className="grid grid-cols-3 p-9"> 
                <DisplayedVideo />
                {/* <Comments /> */}
                <ReproList /> 
         </div> 
        </>
    );
}
