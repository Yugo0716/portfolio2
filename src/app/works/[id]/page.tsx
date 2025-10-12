import Image from 'next/image';
import { getDetail, getWorks } from '@/libs/client';
import Slider from '@/components/imageSlider';
import styles from '@/styles/workDetail.module.css'
import GenreTags from '@/components/genreTags';
import Pagination from '@/components/pagination';

export async function generateStaticParams() {
  const data = await getWorks();
  return data.contents.map((w) => ({ id: w.id }));
}

export default async function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = await getDetail(params.id);

  const list = await getWorks();
  const works = list.contents; 

  return (
    <div className={styles.worksDetail}>
        <Slider images={work.images.map((img: any) => img.url)} />
            <h3></h3>
        <div className={styles.header}>
            {work.logo && (
            <Image src={work.logo.url} alt={`${work.title} ロゴ`} width={48} height={48} />
            )}
            <h2>{work.title}</h2>
        </div>
        
        <GenreTags tags={work.genre} />      

        <div dangerouslySetInnerHTML={{ __html: work.content }} />

        <Pagination
        items={works}
        id={work.id}
        getId={(item: any) => item.id}
        getTitle={(item: any) => item.title}
        pathPrefix="/works"
      />
        </div>

        
    );
}
