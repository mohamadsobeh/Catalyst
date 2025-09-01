import React from "react";

interface YouTubeProps {
  videoUrl: string;
}

const YouTube: React.FC<YouTubeProps> = ({ videoUrl }) => {
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return <div className="text-red-500 text-center">Invalid video URL</div>;
  }

  return (
    <section
      id="youtube"
      className="w-full flex justify-center items-center  py-12 md:py-20"
    >
      <div className="relative w-[95%] md:w-[1771px] h-[220px] sm:h-[400px] md:h-[785px] bg-[#18181899] rounded-md shadow-2xl flex justify-center items-center">
        <iframe
          className="w-[90%] h-[90%] rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default YouTube;
