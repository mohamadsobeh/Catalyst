"use client"
import React, { useEffect, useRef, useState } from "react"

const LocalVideo: React.FC = () => {
  const [inView, setInView] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!wrapRef.current || inView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin: "200px", threshold: 0.01 }
    )

    observer.observe(wrapRef.current)
    return () => observer.disconnect()
  }, [inView])

  return (
    <section
      id="video"
      className="w-full flex justify-center items-center py-12 md:py-20"
    >
      <div
        ref={wrapRef}
        className="relative w-[95%] md:w-[1771px] h-[220px] sm:h-[400px] md:h-[785px] 
                   bg-[#18181899] rounded-md shadow-2xl flex justify-center items-center"
      >
        {inView ? (
          <video
            className="w-[90%] h-[90%] rounded-xl object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        ) : (
          <div className="w-[90%] h-[90%] rounded-xl bg-black/40 animate-pulse" />
        )}
      </div>
    </section>
  )
}

export default LocalVideo
