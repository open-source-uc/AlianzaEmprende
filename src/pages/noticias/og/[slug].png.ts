import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { OgTemplate } from '../../../components/OgTemplate';
import { generateOgImage, getBackgroundImageDataUri } from '../../../utils/open-grap';

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;
  
  const allNews = await getCollection('news');
  const newsItem = allNews.find((item) => item.slug === slug);
  
  if (!newsItem) {
    return new Response('Not Found', { status: 404 });
  }

  const title = newsItem.data.title;
  const backgroundDataUri = await getBackgroundImageDataUri();

  const response = await generateOgImage(
    OgTemplate({
      text: title,
      backgroundUrl: backgroundDataUri,
    })
  );

  return response;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allNews = await getCollection('news');
  
  return allNews.map((newsItem) => ({
    params: { slug: newsItem.slug },
  }));
};
