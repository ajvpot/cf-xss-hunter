import { NextResponse } from 'next/server'
import {Request} from "next/dist/compiled/@edge-runtime/primitives";

export const runtime = 'edge'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function OPTIONS(request: Request){
    return new NextResponse('', {
        status: 200,
        headers: {
            ...corsHeaders
        },
    })
}
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const res = NextResponse.json({ searchParams })
    Object.entries(corsHeaders).forEach(([k,v])=>res.headers.set(k,v))

    return res
}