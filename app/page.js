'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/tts');
  };

  return (
    <div>
      <h1>欢迎来到我的 Next.js 应用！</h1>
      <p>这是一个最简可行的示例。</p>
      <button onClick={handleClick}>跳转到 TTS 页面</button>
    </div>
  );
}
