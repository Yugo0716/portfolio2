import { createClient } from 'microcms-js-sdk';

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type Works = {
  id: string;
  title: string;
  logo: MicroCMSImage;
  thumb: MicroCMSImage;
  images: MicroCMSImage[];
  isGame: string; 
  jenre: string; 
  content: string; 
};

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

// works一覧を取得
export const getWorks = async () => {
    const works = await client.getList<Works>({
    endpoint: "works"
    });
    return works;
}

// worksの詳細を取得
export const getDetail = async (contentId: string) => {
    const works = await client.getListDetail<Works>({
        endpoint: "works",
        contentId,
    });
    return works;
};


