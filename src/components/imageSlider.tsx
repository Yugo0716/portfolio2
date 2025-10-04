'use client';
import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import styles from '@/styles/imageSlider.module.css';

type Props = {
  images: string[];
};

export default function Slider({ images }: Props) {
  // 1枚目の画像の縦横比（width / height）を保持
  const [ratio, setRatio] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Splide
        aria-label="作品画像"
        className={styles.splide}
        options={{
          type: 'loop',
          rewind: true,
          pagination: true,
          arrows: true,
          speed: 600,
          drag: 'free',
          gap: '1rem',        // ← paddingよりgap推奨
        }}
      >
        {images.map((src, i) => (
          <SplideSlide key={i} className={styles.slide}>
            {/* 1枚目の実寸から枠のaspect-ratioを決める。未取得時は16/9で仮置き */}
            <div
              className={styles.imageWrapper}
              style={{ aspectRatio: ratio ?? 16 / 9 }}
            >
              <Image
                className={styles.image}
                src={src}
                alt={`image-${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
                // 最初の1枚が読み込まれたら naturalWidth/Height から比率をセット
                onLoadingComplete={(img) => {
                  if (i === 0 && !ratio) {
                    const r = img.naturalWidth / img.naturalHeight;
                    if (isFinite(r) && r > 0) setRatio(r);
                  }
                }}
                priority={i === 0} // 1枚目は先に読み込む
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
