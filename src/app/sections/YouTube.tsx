"use client"
import React, { useState } from "react"

interface YouTubeProps {
  videoUrl: string
}

const YouTube: React.FC<YouTubeProps> = ({ videoUrl }) => {
  const [play, setPlay] = useState(false)

  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeId(videoUrl)
  if (!videoId) return <div className="text-red-500 text-center">Invalid video URL</div>

  const poster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  return (
    <section id="youtube" className="w-full flex justify-center items-center py-12 md:py-20">
      <div className="relative w-[95%] md:w-[1771px] aspect-video bg-black rounded-md shadow-2xl overflow-hidden">
        {!play ? (
          <button
            onClick={() => setPlay(true)}
            className="w-full h-full relative group cursor-pointer"
          >
            <img
              src={poster}
              alt="YouTube Thumbnail"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* زر التشغيل */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl transition group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  )
}

export default YouTube
