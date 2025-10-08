
import { STANDUPS } from "../app/api/standups/data"; 

export default function Home() {
  return (
    <main>
        <video>{STANDUPS.map((m) => m.id)}</video>
        <h1>habsjh</h1>
    </main>
  );
}
