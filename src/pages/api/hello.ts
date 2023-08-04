// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export const runtime = 'edge';

export default async function (req) {
  return new Response(
      JSON.stringify({ name: 'John Doe' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
  )
}