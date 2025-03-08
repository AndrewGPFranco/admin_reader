export async function GET() {
    return Response.json({ message: 'Olá, mundo!' });
}

export async function POST(request: { json: () => any; }) {
    const body = await request.json();
    return Response.json({ message: 'Dados recebidos', data: body });
}