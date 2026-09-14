'use client'

import { useEffect, useRef } from 'react'

type Strand = { phase: number; speed: number; amplitude: number; width: number; hue: number; offset: number }

export function StrandsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const strands: Strand[] = Array.from({ length: 12 }, (_, index) => ({
      phase: index * 0.72,
      speed: 0.00035 + (index % 4) * 0.00008,
      amplitude: 32 + (index % 5) * 12,
      width: 0.7 + (index % 3) * 0.4,
      hue: index % 3,
      offset: (index - 5.5) / 5.5,
    }))
    let frame = 0
    let raf = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.clientWidth * ratio
      canvas.height = canvas.clientHeight * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time: number) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      context.clearRect(0, 0, width, height)
      const gradient = context.createRadialGradient(width * 0.62, height * 0.45, 0, width * 0.62, height * 0.45, width * 0.65)
      gradient.addColorStop(0, 'rgba(182,243,107,.08)')
      gradient.addColorStop(0.5, 'rgba(83,184,255,.035)')
      gradient.addColorStop(1, 'rgba(11,13,12,0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      strands.forEach((strand) => {
        const travel = reduced ? 0 : time * strand.speed
        const center = width * (0.55 + strand.offset * 0.13)
        context.beginPath()
        for (let step = 0; step <= 80; step += 1) {
          const progress = step / 80
          const x = width * (0.08 + progress * 0.95)
          const wave = Math.sin(progress * 8 + strand.phase + travel) * strand.amplitude
          const secondWave = Math.cos(progress * 14 - strand.phase * 1.7 + travel * 1.3) * 12
          const y = height * (0.5 + strand.offset * 0.04) + wave + secondWave + (x - center) * strand.offset * 0.22
          if (step === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
        const colors = ['182,243,107', '93,210,255', '168,120,255']
        const color = colors[strand.hue]
        context.strokeStyle = `rgba(${color},${0.16 + (strand.hue === 0 ? 0.1 : 0)})`
        context.lineWidth = strand.width
        context.shadowBlur = strand.hue === 0 ? 14 : 8
        context.shadowColor = `rgba(${color},.45)`
        context.stroke()
      })
      context.shadowBlur = 0
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw(0)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="strands-canvas" aria-hidden="true" />
}
