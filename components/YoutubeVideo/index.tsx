'use client';
import { cn } from '@/lib/utils';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function YoutubeVideo({ videoId, className, ...props }: YouTubeProps) {
    return (
        <YouTube
            className={cn('aspect-video w-full', className)}
            iframeClassName="aspect-video w-full h-full"
            videoId={videoId}
            {...props}
        />
    );
}
