import Image from 'next/image';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function JpPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>日本版ページへようこそ</h1>
      <p>このページは nextjs-app-global から rewrite で呼び出されています。</p>
      <p>JP_DOMAIN: {process.env.JP_DOMAIN || 'localhost:3001'}</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>日本の国旗（相対パス: /images/japan-flag.svg）</h2>
        <p>URL: /images/japan-flag.svg</p>
        <Image
          src="/images/japan-flag.svg"
          alt="日本の国旗"
          width={300}
          height={200}
          priority
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>日本の国旗（環境変数使用: ${`\{process.env.NEXT_PUBLIC_ASSET_PREFIX\}/images/japan-flag.svg`}）</h2>
        <p>URL: {process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/japan-flag.svg</p>
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/japan-flag.svg`}
          alt="日本の国旗"
          width={300}
          height={200}
          priority
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>外部画像（絶対URL: https://placehold.jp/）</h2>
        <p>URL: https://placehold.jp/3d4070/ffffff/300x200.png?text=%E6%97%A5%E6%9C%AC%E7%89%88</p>
        <Image
          src="https://placehold.jp/3d4070/ffffff/300x200.png?text=%E6%97%A5%E6%9C%AC%E7%89%88"
          alt="プレースホルダー画像"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
}