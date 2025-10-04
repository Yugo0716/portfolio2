import Image from 'next/image';
import { getDetail, getWorks } from '@/libs/client';

export async function generateStaticParams() {
  const data = await getWorks();
  return data.contents.map((w) => ({ id: w.id }));
}

export default async function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = await getDetail(params.id);

  return (
    <main>
        {work.logo && (
        <Image src={work.logo.url} alt={`${work.title} ロゴ`} width={64} height={64} />
        )}
        <h1>{work.title}</h1>

        {/* 追加の画像がある場合 */}
        {work.images && (
            <div>
            {work.images.map((img, i) => (
                <Image key={i} src={img.url} alt="" width={img.width} height={img.height} />
            ))}
            </div>
        )}

        {/* HTML形式で返るのでdangerouslySetInnerHTMLで描画 */}
        <div dangerouslySetInnerHTML={{ __html: work.content }} />

        
        </main>
    );
}
