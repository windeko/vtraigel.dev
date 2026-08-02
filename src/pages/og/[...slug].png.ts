import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import satori from 'satori';
import sharp from 'sharp';
import { SITE } from '../../consts';

const font = (f: string) => readFileSync(`${process.cwd()}/src/assets/fonts/${f}`);
const fonts = [
  { name: 'Inter', data: font('inter-700.woff'), weight: 700 as const, style: 'normal' as const },
  { name: 'Mono', data: font('jetbrains-mono-500.woff'), weight: 500 as const, style: 'normal' as const },
];

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { title, tag, date, cover } = props.post.data;
  const eyebrow = `${tag} · ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F3EFE6',
          fontFamily: 'Inter',
        },
        children: [
          // Accent strip — reuses the post's cover gradient
          { type: 'div', props: { style: { height: 14, backgroundImage: `linear-gradient(90deg, ${cover.from}, ${cover.to})` } } },
          {
            type: 'div',
            props: {
              style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column' },
                    children: [
                      { type: 'div', props: { style: { fontFamily: 'Mono', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: '#976210' }, children: eyebrow } },
                      { type: 'div', props: { style: { marginTop: 28, fontSize: 64, lineHeight: 1.12, letterSpacing: -1.5, color: '#23201B' }, children: title } },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', justifyContent: 'space-between', fontFamily: 'Mono', fontSize: 24, color: '#6E655A' },
                    children: [
                      { type: 'div', props: { children: SITE.name } },
                      { type: 'div', props: { style: { color: '#976210' }, children: 'vtraigel.dev' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts }
  );

  return new Response(await sharp(Buffer.from(svg)).png().toBuffer(), {
    headers: { 'Content-Type': 'image/png' },
  });
};
