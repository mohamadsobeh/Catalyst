"use client"
import React, { useEffect, useRef, useState } from "react"

interface YouTubeProps {
  videoUrl: string
}

const YouTube: React.FC<YouTubeProps> = ({ videoUrl }) => {
  const [inView, setInView] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeId(videoUrl)
  const isInvalid = !videoId

  // Lazy mount للـ iframe عند دخول القسم لنطاق الرؤية
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
      id="youtube"
      className="w-full flex justify-center items-center  py-12 md:py-20"
    >
      {/* لو الرابط غير صالح نعرض رسالة داخل نفس الهيكل بدون إرجاع مبكر */}
      {isInvalid ? (
        <div className="text-red-500 text-center">Invalid video URL</div>
      ) : (
        <div
          ref={wrapRef}
          className="relative w-[95%] md:w-[1771px] h-[220px] sm:h-[400px] md:h-[785px] bg-[#18181899] rounded-md shadow-2xl flex justify-center items-center"
        >
          {inView ? (
            <iframe
              className="w-[90%] h-[90%] rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="YouTube video player"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="w-[90%] h-[90%] rounded-xl bg-black/40 animate-pulse" />
          )}
        </div>
      )}
    </section>
  )
}

export default YouTube
