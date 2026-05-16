
import { NextResponse } from 'next/server'
import { deployProject } from '@/lib/deploy/netlify'

export async function POST(){
  const result = await deployProject()

  return NextResponse.json(result)
}
