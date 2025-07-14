  /* ===== 个人配置：只改这里 ===== */
  const config = {
    avatar: 'https://avatars.githubusercontent.com/u/123456?v=4',
    name: 'Your Name',
    bio: '加载中…',                 // 占位文案
    links: [
      { title: '📧 邮箱', url: 'mailto:you@example.com' },
      { title: '🐙 GitHub', url: 'https://github.com/yourname' },
      { title: '🐦 Twitter', url: 'https://twitter.com/yourname' },
      { title: '📝 博客', url: 'https://blog.example.com' }
    ]
  };
  /* ===== 渲染 ===== */
  document.getElementById('avatar').src = config.avatar;
  document.getElementById('name').textContent  = config.name;
  document.getElementById('bio').textContent   = config.bio;

  const nav = document.getElementById('links');
  config.links.forEach(l=>{
    const a=document.createElement('a');
    a.className='btn';
    a.href=l.url;
    a.textContent=l.title;
    a.target='_blank';
    nav.appendChild(a);
  });

  /* ===== 一言接口替换简介 ===== */
  fetch('https://api.fenx.top/api/hitokoto')
    .then(r => r.text())
    .then(txt => { document.getElementById('bio').textContent = txt; })
    .catch(() => { document.getElementById('bio').textContent = '加载失败，请稍后再试'; });
