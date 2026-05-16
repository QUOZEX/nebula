
import { NextResponse } from 'next/server'
import { generateCode } from '@/lib/ai/orchestrator'

export async function POST(req:Request){
  const body = await req.json()

  const result = await generateCode(body.prompt)

  return NextResponse.json(result)
}
