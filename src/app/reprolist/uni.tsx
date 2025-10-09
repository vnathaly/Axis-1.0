import {STANDUPS} from "../api/standups/data";

export default function name() {
  return (
        <>
          <div>
            {STANDUPS.map((m) => 
            <ul>
                <li key={m.id}> 
                   <a href="">{m.url}</a> 
                </li>
            </ul>
            )}
            </div>
        </>
  ) 
}
