import { STANDUPS } from "./data";

export async function GET(request: Request) {
    return Response.json({ data: STANDUPS });
}