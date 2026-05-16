
'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'

export default function Workspace(){
  const [tab,setTab] = useState('preview')

  return (
    <div>
      <div style={{display:'flex',gap:12}}>
        <button onClick={()=>setTab('preview')}>Preview</button>
        <button onClick={()=>setTab('code')}>Code</button>
        <button onClick={()=>setTab('dashboard')}>Dashboard</button>
      </div>

      <div style={{
        marginTop:20,
        background:'#0f172a',
        padding:20,
        borderRadius:16,
        minHeight:600
      }}>
        {tab === 'preview' && (
          <iframe
            srcDoc="<html><body><h1>Nebula Preview</h1></body></html>"
            style={{
              width:'100%',
              height:500,
              border:'none',
              borderRadius:12,
              background:'white'
            }}
          />
        )}

        {tab === 'code' && (
          <Editor
            height="500px"
            defaultLanguage="typescript"
            defaultValue={`export default function App(){return <div>Hello</div>}`}
          />
        )}

        {tab === 'dashboard' && (
          <div>
            <h2>Runtime Issues</h2>
            <ul>
              <li>Missing OPENROUTER_API_KEY</li>
              <li>Supabase not connected</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
