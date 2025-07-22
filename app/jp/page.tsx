export default function JpPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>日本版ページへようこそ</h1>
      <p>このページは nextjs-app-global から rewrite で呼び出されています。</p>
      <p>JP_DOMAIN: {process.env.JP_DOMAIN || 'localhost:3001'}</p>
    </div>
  );
}