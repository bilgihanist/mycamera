export const runtime = 'nodejs'

export async function GET() {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(()=>{
        const payload = JSON.stringify({ 
          ts: Date.now(), 
          online: Math.floor(Math.random()*120) + 80 // 80-200 arası rastgele değer
        })
        controller.enqueue(encoder.encode(`data: ${payload}\n\n`))
      }, 3000)
      
      // Cleanup function
      return () => clearInterval(interval)
    }
  })
  
  return new Response(stream, { 
    headers: { 
      'Content-Type': 'text/event-stream', 
      'Cache-Control': 'no-cache', 
      'Connection': 'keep-alive' 
    } 
  })
}
