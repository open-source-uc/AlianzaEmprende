// @ts-ignore
import React from 'react';

interface OgTemplateProps {
  text: string;
  backgroundUrl: string;
}

export function OgTemplate({ text, backgroundUrl }: OgTemplateProps) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: 'black',
      }}
    >
      <img 
        src={backgroundUrl} 
        width={1200} 
        height={630} 
        style={{ 
          opacity: 0.6,
          objectFit: 'cover',
        }} 
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: 'white',
          padding: 64,
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {text}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            opacity: 0.9,
            display: 'flex',
          }}
        >
          Alianza Emprende - Noticias
        </div>
      </div>
    </div>
  );
}
