  /* ===== 个人配置：只改这里 ===== */
  const config = {
    avatar: 'https://api.fenx.top/api/qqimg?qq=82115339',
    name: '狐狸引导页',
    bio: '加载中…',                 // 占位文案
    links: [
      { title: '狐狸资源网', url: 'https://www.foxccs.com/' },
    { title: '狐狸导航', url: 'https://www.foxccs.cn/' },
    { title: '蚂蚁分享网', url: 'https://www.emyi.cn/' },
    { title: '蜜蜂图床', url: 'https://www.beeimg.cn/' },
    { title: ' 蜂巢云盘', url: 'https://www.beeseek.cn/home' },
    { title: ' 邮箱', url: 'mailto:foxccs@qq.com' }
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
