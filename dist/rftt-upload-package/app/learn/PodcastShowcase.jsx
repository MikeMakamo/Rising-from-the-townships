'use client';

import { useState } from 'react';

export default function PodcastShowcase({ podcasts }) {
  const [activeVideoId, setActiveVideoId] = useState(podcasts[0]?.videoId ?? null);

  const activePodcast =
    podcasts.find((podcast) => podcast.videoId === activeVideoId) ?? podcasts[0] ?? null;

  if (!activePodcast) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)] gap-8 items-start">
      <div className="bg-brand-dark rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${activePodcast.videoId}?rel=0`}
            title={activePodcast.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="px-6 py-6 sm:px-8 bg-brand-dark text-white">
          <p className="text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Now Playing
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-3">
            {activePodcast.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-5">{activePodcast.channel}</p>
          <a
            href={activePodcast.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white hover:text-brand-red transition-colors"
          >
            Open on YouTube
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="space-y-4">
        {podcasts.map((podcast) => {
          const isActive = podcast.videoId === activePodcast.videoId;

          return (
            <button
              key={podcast.videoId}
              type="button"
              onClick={() => setActiveVideoId(podcast.videoId)}
              className={`w-full text-left rounded-[1.5rem] border transition-all overflow-hidden ${
                isActive
                  ? 'border-brand-red bg-brand-red-pale shadow-[0_18px_40px_rgba(212,31,36,0.12)]'
                  : 'border-gray-200 bg-white hover:border-brand-red/40 hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]'
              }`}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-44 sm:flex-shrink-0 bg-brand-dark">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className="w-full h-40 sm:h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 p-5">
                  <p className="text-brand-red font-bold text-[11px] uppercase tracking-[0.18em] mb-2">
                    {podcast.channel}
                  </p>
                  <h4 className="font-heading text-xl font-bold text-brand-dark leading-snug mb-3">
                    {podcast.title}
                  </h4>
                  <p className="text-sm font-bold text-brand-gray-mid uppercase tracking-[0.14em]">
                    {isActive ? 'Playing on site' : 'Play on site'}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
