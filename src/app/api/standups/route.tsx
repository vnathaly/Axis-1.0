import { STANDUPS } from "./data";

export async function GET(request: Request) {
    console.log("AAAAAAA");
    return Response.json({ data: STANDUPS });
}


