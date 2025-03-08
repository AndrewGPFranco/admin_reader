export async function GET() {
    return Response.json({ message: 'Olá, mundo!' });
}

export async function POST(request: Request) {
    const body: Record<string, unknown> = await request.json();
    return Response.json({ message: 'Dados recebidos', data: body });
}
