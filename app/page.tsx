
'use client'

import Link from 'next/link'

export default function HomePage(){
  return (
    <main style={{padding:40}}>
      <h1 style={{fontSize:56}}>Nebula.build</h1>
      <p>AI App Builder</p>

      <Link href="/dashboard">
        <button style={{
          padding:'14px 24px',
          borderRadius:12,
          border:'none',
          background:'#2563eb',
          color:'white'
        }}>
          Launch Workspace
        </button>
      </Link>
    </main>
  )
}
