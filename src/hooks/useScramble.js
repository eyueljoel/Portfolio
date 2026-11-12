import { useEffect, useState } from 'react'

const CHARS = '!<>-_\\/[]{}=+*^?#________'

export default function useScramble(words = [], hold = 2200) {
  const [text, setText] = useState(words[0] || '')

  useEffect(() => {
    if (!words.length) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    let i = 0
    let frame
    let timer

    const scrambleTo = (nextWord) => {
      const from = text
      const len = Math.max(from.length, nextWord.length)
      const queue = Array.from({ length: len }, (_, n) => ({
        from: from[n] || '',
        to: nextWord[n] || '',
        start: Math.floor(Math.random() * 15),
        end: Math.floor(Math.random() * 15) + 15,
      }))

      let f = 0
      const tick = () => {
        let out = ''
        let done = 0
        queue.forEach(({ from, to, start, end }) => {
          if (f >= end) {
            done++
            out += to
          } else if (f >= start) {
            out += CHARS[Math.floor(Math.random() * CHARS.length)]
          } else {
            out += from
          }
        })
        setText(out)
        if (done < queue.length) {
          f++
          frame = requestAnimationFrame(tick)
        }
      }
      tick()
    }

    timer = setInterval(() => {
      i = (i + 1) % words.length
      scrambleTo(words[i])
    }, hold + 900)

    return () => {
      clearInterval(timer)
      cancelAnimationFrame(frame)
    }
  }, [words, hold])

  return text
}

