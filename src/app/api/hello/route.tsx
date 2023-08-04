import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    return NextResponse.json({ searchParams })
}